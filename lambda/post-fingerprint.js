

module.exports.handler = async function(event, context) {
    //data,page params

    const faunadb = require('faunadb'); /* Import faunaDB sdk */
    const _ = require("lodash");
    /* configure faunaDB Client with our secret */
    const q = faunadb.query;

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

    const parsedBody = JSON.parse(event.body);
    const fingerprint = await checkFingerprint(parsedBody.data);

    if( fingerprint.value !== null &&
        fingerprint.matchCount > 8 &&
        parsedBody.data.ip === fingerprint.value.data.ip){
        addSiteHistory(fingerprint.value.data, { page: parsedBody.page, date: new Date().toISOString(), action: 'landed on page' });
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Updated Site History"})
        };
    }

    client.query(
      q.Create(
        q.Collection('fingerprints'),
        { data: parsedBody.data },
      )
    )
    .then((ret) => {
        addSiteHistory(ret.data, { page: parsedBody.page, date: new Date().toISOString(), action: 'landed on page'  });
    })
    .catch((err) => console.log(err));

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Successful Fingerprint Post"})
    };
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