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

// toString is called to check if the string is empty
const isEmpty = (value) => ( value == null || value.toString().trim() === "" );

// hasValue is called to check if a string is non empty
const hasValue = (value) => (value != null && value.toString().trim() !== "")

export const StringUtils = {
    concatenate,
    isEmpty,
    hasValue
}
