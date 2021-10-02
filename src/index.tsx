import * as React from 'react';
import * as UAParser from 'ua-parser-js';

type IUseUAReturn = Omit<UAParser.IResult, 'ua'>;

function useUA(uastring = window.navigator.userAgent) {
  return React.useMemo<IUseUAReturn | null>(() => {
    try {
      const uaParser = new UAParser.UAParser();
      uaParser.setUA(uastring);
      return {
        os: uaParser.getOS(),
        browser: uaParser.getBrowser(),
        cpu: uaParser.getCPU(),
        device: uaParser.getDevice(),
        engine: uaParser.getEngine(),
      };
    } catch (err) {
      return null
    }
  }, [uastring]);
}

export { useUA };