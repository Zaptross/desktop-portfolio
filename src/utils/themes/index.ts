export enum Theme {
    Windows11,
    MacOS,
    Linux,
}

/**
 * Adds a one pixel wide black text stroke to the given text.
 * Ref: https://stackoverflow.com/questions/26634201/add-stroke-around-text-on-the-outside-with-css#:~:text=For%20a%20smooth%20outside%20stroke%20emulated%20by%20text%20shadow%2C%20use%20the%20following%208%2Daxis%20shadow%3A
 */
export const complexTextStroke = {
    'text-shadow': `    -1px -1px 0 #000,
    0   -1px 0 #000,
    1px -1px 0 #000,
    1px  0   0 #000,
    1px  1px 0 #000,
    0    1px 0 #000,
   -1px  1px 0 #000,
   -1px  0   0 #000;`,
};
