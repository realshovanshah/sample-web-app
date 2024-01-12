import fetchMock from 'fetch-mock';

/**
 * Mock url snapshot 'backend'.
 * @param {Array<UrlSnapshot>} indexedUrls
 */
export default function initMockApi(indexedUrls) {
  fetchMock.get(
      'glob:/url/*',
      (url) => {
        const urlFromPath = url.replace('/url/', '');
        const match = indexedUrls.find((val) => urlFromPath === val.url);
        console.debug('url:', urlFromPath, 'match:', match);
        return match !== undefined ? new Response(JSON.stringify(match)) : 404;
      },
      {delay: 500},
  ).catch(404);
}
