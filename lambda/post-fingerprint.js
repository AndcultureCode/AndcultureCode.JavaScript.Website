

module.exports.handler = async function(event, context) {
    //data,page params

    const faunadb = require('faunadb'); /* Import faunaDB sdk */
    const _ = require("lodash");
    /* configure faunaDB Client with our secret */
    const q = faunadb.query;
    console.log('event ', event);
    const client = new faunadb.Client({
      secret: 'fnAD8ACvJ0ACAjhiL19AsuZeNvadoPoy1hHCMpa0',
    });
    //methods needed
    const checkFingerprint = async (createFingerprintDto) => {
        const fingerprint = {...createFingerprintDto};
        const keys = Object.keys(fingerprint);

        const returnedQueryResults = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('fingerprints'))),
                q.Lambda(x => q.Get(x))
              )
        );

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

    const addSiteHistory = async (createFingerprintDto, createSiteHistoryDto) => {
        const fingerprintUser = await checkFingerprint(createFingerprintDto);
        const uid = fingerprintUser.value.ref.value.id;

        client.query(
            q.Update(q.Ref(q.Collection('fingerprints'), uid), { data: { visitHistory: [...createFingerprintDto.visitHistory, createSiteHistoryDto] } })
        )
        .then((ret) => console.log(ret))
        .catch((err) => console.log(err));

    }

    console.log(event.body.data);
    console.log(event.body.data.page);
    const parsedData = JSON.parse(event.body.data);
    const fingerprint = await checkFingerprint(parsedData);

    if( fingerprint.value !== null &&
        fingerprint.matchCount > 8 &&
        parsedData.ip === fingerprint.value.data.ip){
        addSiteHistory(fingerprint.value.data, { page: parsedData.page, date: new Date().toISOString(), action: 'landed on page' });
        return null;
    }

    client.query(
      q.Create(
        q.Collection('fingerprints'),
        { data: parsedData },
      )
    )
    .then((ret) => {
        addSiteHistory(ret.data, { page: parsedData.page, date: new Date().toISOString(), action: 'landed on page'  });
        return {
            // return null to show no errors
            statusCode: 200, // http status code
          }
    })
    .catch((err) => console.log(err));

}

// export const checkFingerprint = async (createFingerprintDto) => {
//     const fingerprint = {...createFingerprintDto};
//     const keys = Object.keys(fingerprint);

//     const returnedQueryResults = await client.query(
//         q.Map(
//             q.Paginate(q.Documents(q.Collection('fingerprints'))),
//             q.Lambda(x => q.Get(x))
//           )
//     );

//     const finalResult = returnedQueryResults.data.reduce((prevValue, curVal) => {
//         const curData = curVal.data;
//         const matches = keys.map(k => _.isEqual(curData[k], fingerprint[k]));
//         const numMatch = matches.filter(m => m === true).length;
//         if (numMatch > prevValue.matchCount) {
//             return {value: curVal, matchCount: numMatch};
//         }
//         return prevValue;
//     }, {value: null, matchCount: 0});
//      console.log('final result', finalResult);
//     return finalResult;
// }

// export const addSiteHistory = async (createFingerprintDto, createSiteHistoryDto) => {
//     const fingerprintUser = await checkFingerprint(createFingerprintDto);
//     const uid = fingerprintUser.value.ref.value.id;

//     client.query(
//         q.Update(q.Ref(q.Collection('fingerprints'), uid), { data: { visitHistory: [...createFingerprintDto.visitHistory, createSiteHistoryDto] } })
//     )
//     .then((ret) => console.log(ret))
//     .catch((err) => console.log(err));

// }