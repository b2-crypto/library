import { Buffer } from 'buffer';
import words from 'lodash/words';
export const convertToBase64 = (string) => {
    return new Buffer(string).toString('base64');
};
export const getCurrencyColor = (Icon) => {
    return Icon.color;
};
export const formatError = (str) => {
    return words(str).join(' ');
};
export const hexToRgbA = (hex, opacity) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return ('rgba(' +
            // eslint-disable-next-line no-bitwise
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
            `,${opacity})`);
    }
    throw new Error('Bad Hex');
};
