import faunadb from 'faunadb' /* Import faunaDB sdk */
import _ from "lodash";
/* configure faunaDB Client with our secret */
const q = faunadb.query;

const client = new faunadb.Client({
  secret: 'fnAD8ACvJ0ACAjhiL19AsuZeNvadoPoy1hHCMpa0',
})

/* export our lambda function as named "handler" export */
export const postFingerprint = async (data, page) => {
    const fingerprint = await checkFingerprint(data);

   console.log('data ip', data.ip);
   console.log('fingerprint ip', fingerprint.value.data.ip);

    if(fingerprint.matchCount > 8 && data.ip === fingerprint.value.data.ip){
        addSiteHistory(fingerprint.value.data, { page, date: new Date().toISOString(), action: 'landed on page' });
        return null;
    }

    client.query(
      q.Create(
        q.Collection('fingerprints'),
        { data: data },
      )
    )
    .then((ret) => {
        addSiteHistory(ret.data, { page, date: new Date().toISOString(), action: 'landed on page'  });
    })
    .catch((err) => console.log(err));
}

export const checkFingerprint = async (createFingerprintDto) => {
    const fingerprint = {...createFingerprintDto};
    const keys = Object.keys(fingerprint);

    const returnedQueryResults = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('fingerprints'))),
            q.Lambda(x => q.Get(x))
          )
    );

//     const ipCheck = returnedQueryResults.data.find((val) => val.data.ip === fingerprint.ip);

// if(ipCheck !== undefined){
//     return {value: ipCheck, matchCount: 1, ip: fingerprint.ip}
// }

    // const finalResult = returnedQueryResults.data.reduce((prevValue, curVal) => {
    //     const matches = keys.map(k => curVal[k] === fingerprint[k]);
    //     if (matches.length > prevValue.matchCount) {
    //         console.log('curval', curVal);
    //         return {value: curVal, matchCount: matches.length, ip: curVal.data.ip};
    //     }
    //     return prevValue;
    // }, {value: null, matchCount: 0, ip: null});

    const finalResult = returnedQueryResults.data.reduce((prevValue, curVal) => {
        const curData = curVal.data;
        const matches = keys.map(k => _.isEqual(curData[k], fingerprint[k]));
        const numMatch = matches.filter(m => m === true).length;
        if (numMatch > prevValue.matchCount) {
            return {value: curVal, matchCount: numMatch};
        }
        return prevValue;
    }, {value: null, matchCount: 0});
     console.log('final result', finalResult);
    return finalResult;
}

export const addSiteHistory = async (createFingerprintDto, createSiteHistoryDto) => {
    const fingerprintUser = await checkFingerprint(createFingerprintDto);
    const uid = fingerprintUser.value.ref.value.id;

    client.query(
        q.Update(q.Ref(q.Collection('fingerprints'), uid), { data: { visitHistory: [...createFingerprintDto.visitHistory, createSiteHistoryDto] } })
    )
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));

}

export const createUser = (data) => {
    client.query(
        q.Create(
            q.Collection('users'),
            { data: data },
        )
    )
    .catch((err) => console.log(err));
}

export const submitLandingFormOne = async (email, fingerprint) => {

    const probFingerprint = await checkFingerprint(fingerprint);
      //check language, long, lat, ip, city, postal, timezone, rather than whole fingerprint, highlight higher rated qualities rather than underrated weighted
      //check long lat with certian ranges to specify within a certian degree is it the same person

    const allUsers = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('users'))),
            q.Lambda(x => q.Get(x))
          )
        );

    const theUser = allUsers.data.find((user) => user.data.fingerprintId === probFingerprint.value.ref.value.id);

    if (theUser == null) {
        await createUser({ email: email, fingerprintId: probFingerprint.value.ref.value.id, marketingMatchCount: probFingerprint.matchCount });
    }

    await addSiteHistory(probFingerprint.value.data, {date: new Date().toISOString(), page:'blog-page', action: 'submit form' })
}