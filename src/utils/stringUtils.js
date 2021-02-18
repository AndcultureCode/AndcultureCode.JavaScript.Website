/**
 * Concatenates string values
 * @param {array} stringArray - nullable array
 * @param {string} otherSeparators - separator between each value; defaults to ", "
 * @param {string} lastSeparator - separator before the last string (if different than otherSeparators); defaults to " & " if otherSeparators is not set
 */
const concatenate = (stringArray, otherSeparators, lastSeparator) => {
    // set default separators
    if (!otherSeparators && !lastSeparator) {
        lastSeparator   = " & ";
        otherSeparators = ", ";
    } else if (!lastSeparator) {
        lastSeparator = otherSeparators;
    } else if (!otherSeparators) {
        otherSeparators = ", ";
    }

    // concatenate
    if (!Array.isArray(stringArray)) {
        return stringArray;
    }
    if (stringArray.length <= 2) {
        return stringArray.join(lastSeparator);
    }
    return stringArray.slice(0, stringArray.length - 1).join(otherSeparators) + lastSeparator + stringArray[stringArray.length - 1];
}

export const StringUtils = {
    concatenate,
}
