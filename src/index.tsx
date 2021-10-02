import * as React from 'react';
import * as UAParser from 'ua-parser-js';

type IUseUAReturn = Omit<UAParser.IResult, 'ua'>;

const uaParser = new UAParser.UAParser();

function useUA(uastring = window.navigator.userAgent) {
  return React.useMemo<IUseUAReturn | null>(() => {
    try {
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

function useDevice(uastring = window.navigator.userAgent) {
  return React.useMemo<UAParser.IResult['device'] | null>(() => {
    try {
      uaParser.setUA(uastring);
      return uaParser.getDevice();
    } catch (err) {
      return null
    }
  }, [uastring]);
}

function useBrowser(uastring = window.navigator.userAgent) {
  return React.useMemo<UAParser.IResult['browser'] | null>(() => {
    try {
      uaParser.setUA(uastring);
      return uaParser.getBrowser();
    } catch (err) {
      return null
    }
  }, [uastring]);
}

function useCPU(uastring = window.navigator.userAgent) {
  return React.useMemo<UAParser.IResult['cpu'] | null>(() => {
    try {
      uaParser.setUA(uastring);
      return uaParser.getCPU();
    } catch (err) {
      return null
    }
  }, [uastring]);
}

function useEngine(uastring = window.navigator.userAgent) {
  return React.useMemo<UAParser.IResult['engine'] | null>(() => {
    try {
      uaParser.setUA(uastring);
      return uaParser.getEngine();
    } catch (err) {
      return null
    }
  }, [uastring]);
}

export { useUA, useDevice, useBrowser, useCPU, useEngine };