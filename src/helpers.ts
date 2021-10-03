import * as UAParser from 'ua-parser-js';

function isMobile(details: UAParser.IResult['device']): boolean {
  return details.type === 'mobile';
}

function isTouchDevice(details: UAParser.IResult['device']): boolean {
  return ['mobile', 'tablet', 'wearable'].includes(details.type || '');
}

export { isMobile, isTouchDevice };
