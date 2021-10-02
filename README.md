<p align="center">
    <img src="https://raw.githubusercontent.com/burnpiro/use-ua-parser-js/master/misc/logo.png" width="512" height="256"> 
</p>

<p align="center">
<a href="https://travis-ci.org/faisalman/ua-parser-js"><img src="https://travis-ci.org/faisalman/ua-parser-js.svg?branch=master"></a>
<a href="https://www.npmjs.com/package/ua-parser-js"><img src="https://img.shields.io/npm/v/ua-parser-js.svg"></a>
</p>

# useUA React Hook

React Hook built on top of UAParser.js library to detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data

- Hook author: Kemal Erdem https://erdem.pl
- UAParse.js author : Faisal Salman <<f@faisalman.com>>
- Demo : https://faisalman.github.io/ua-parser-js
- Source : https://github.com/burnpiro/use-ua-parser-js

# Installation
```bash
npm i use-ua-parser-js
```

# Usage

```javascript
import { useUA } from 'use-ua-parser-js';

const myComponent: FC<Props> = (props) => {
  const UADetails = useUA(); //get current browser data
  [...]
}
```

Return:
```typescript
{
  ua: string,
  browser: { name: string, version: string },
  cpu: { architecture: string },
  device: { model: string, type: string, vendor: string },
  engine: { name: string, version: string },
  os: { name: string, version: string }
}
```

### Options

Parse custom userAgent:

```javascript

import { useUA } from 'use-ua-parser-js';

const customAgent = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3';
const myComponent: FC<Props> = (props) => {
  const UADetails = useUA(customAgent);
  [...]
}
```
