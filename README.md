# URL Snapshot

Get a quick snapshot of a URL.

## Problem Overview

#### Basic Flow
```
+-----+                   +-----+          +----------+
| ui  |                   | app |          |  server  |
+-----+                   +-----+          +----------+
   |                         |                   |
   |~~~~~~~validURL?~~~~~~~~>|                   |
   |<------------------------|                   |
   |                         |                   |
   |                      *****************************
   |                      * if true                   *
   |                      *****************************
   |                         |                   |
   |                         |~~GET /url/:url~~~>|
   |                         |<------------------|
   |                         |                   |
   |                      *****************************
   |                      * end if                    *
   |                      *****************************
   |                         |                   |
*********************************                |
* if exists                     *                |
*********************************                |
   |                         |                   |
   |<~~~~~~show detail~~~~~~~|                   |
   |     (file/directory)    |                   |
   |------------------------>|                   |
   |                         |                   |
*********************************                |
* else                          *                |
*********************************                |
   |                         |                   |
   |<~~~~~no such URL~~~~~~~~|                   |
   |------------------------>|                   |
   |                         |                   |
*********************************                |
* end if                        *                |
*********************************                |
   |                         |                   |
+-----+                   +-----+           +----------+
| ui  |                   | app |           |  server  |
+-----+                   +-----+           +----------+
```

#### Assumptions
- A modern (browser like) understanding of an URL is assumed; including a trivial implementation.
   - This can be changed to use a custom implementation, or the built in [URL constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL) can be used, based on the need.
- The backend is either an realtime computational server, or a crawler that indexes the different urls and their properties.

## Implementation

### Frontend
A layered architecture — featuring data, domain and presentation — with seperation of concerns. Powered by a simple DOM and state manipulation library like Alpine.js.

#### Running the app
```
$ npm install
$ npm start
```

#### Testing
A list of supported urls can be found at `src/api/db.js`.  Eg: clubhouse.com

"Unsupported" urls can be anything outside of that, eg: bad.com.

### Backend

#### 
##### Endpoints:
```
# Check status of a given url

GET /url/:url
Response: 200, 404
```

## Todos
- Tests, tests, test. This easily seems to the biggest thing missing right now.
- Need to gauge browser compatibility
- Better integration with the network layer
   - Validate schema before sending data to the domain layer
   - Better handle network issues, especially the 500s. 
   - Also internet connection issues.

## Trade Offs & Future Considerations
- Throttle alone doesn't give the best UX, or even request optimization.
   - Debounce better suits the need in this case
   - Server load can also be reduced by aborting/canceling earlier requests, perhaps with: `AbortController`
   - Avoid triggering (duplicate) request unchanged urls
- Edge case: `redirects` are not considered 
