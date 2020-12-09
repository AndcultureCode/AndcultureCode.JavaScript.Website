module.exports.handler = async function(event, context) {
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

    const createUser = (data) => {
        client.query(
            q.Create(
                q.Collection('users'),
                { data: data },
            )
        )
        .catch((err) => console.log(err));
    }

    const probFingerprint = await checkFingerprint(event.data.fingerprint);
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
        await createUser({ email: event.data.email, fingerprintId: probFingerprint.value.ref.value.id, marketingMatchCount: probFingerprint.matchCount });
    }

    await addSiteHistory(probFingerprint.value.data, {date: new Date().toISOString(), page:'blog-page', action: 'submit form' })
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


// export const createUser = (data) => {
//     client.query(
//         q.Create(
//             q.Collection('users'),
//             { data: data },
//         )
//     )
//     .catch((err) => console.log(err));
// }