## secure-request-encoder

Secure Request Encoder is a middleware package for Node.js and Express.js that enhances the security of your web application by encoding potentially unsafe characters in HTTP request bodies. It helps prevent cross-site scripting (XSS) attacks by sanitizing user input before it is processed by your application.

## Features

- Automatically encodes HTML entities such as < and > to their safe equivalents (&lt; and &gt;) in request data.
- Supports both string and object request bodies, ensuring that string values within objects are properly encoded.
- Recursively traverses complex JSON request bodies to sanitize nested strings.
- Designed to seamlessly integrate with Express.js applications.

## Installation

Install http-status-codes with npm

```bash
  npm install secure-request-encoder
```

## Usage/Examples

```javascript
import securerequestencoder from "secure-request-encoder";

const app = express();

app.use(securerequestencoder);
```

### Feel free to customize and expand upon this description to provide more information about your package's functionality, usage, and any additional features or considerations.
