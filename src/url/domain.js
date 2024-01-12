/* eslint-disable max-len */
/**
 *
 * @param {String} text
 * @return {Boolean}
 */
export function validUrl(text) {
  const urlRegex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
  const isValid = urlRegex.test(text);
  console.debug('validUrl: ', text, isValid);
  return isValid;
}
