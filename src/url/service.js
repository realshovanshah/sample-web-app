/**
 * @param {String} url
 * @return {Promise<UrlSnapshot?>}
 */
export async function requestUrlSnapshot(url) {
  try {
    console.log('requestUrlSnapshot request:', url);
    const response = await fetch(`/url/${encodeURI(url)}`);
    console.log('requestUrlSnapshot response:', response);
    if (!response.ok) {
      throw new Error(`HTTP Response Code: ${response?.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('error:', error);
    return null;
  }
}
