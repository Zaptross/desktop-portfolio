import { createUseStyles } from 'react-jss';
import { Theme } from '../../utils/themes';

export type StyleProps = {
    theme: Theme;
};

const themes = {
    [Theme.Linux]: createLinuxUseStyles(),
    [Theme.MacOS]: createMacOSUseStyles(),
    [Theme.Windows11]: createWindows11UseStyles(),
};

export function getUseStylesByTheme(theme: Theme) {
    switch (theme) {
        case Theme.Linux:
            return themes[Theme.Linux];
        case Theme.MacOS:
            return themes[Theme.MacOS];
        case Theme.Windows11:
            return themes[Theme.Windows11];
    }
}

function createWindows11UseStyles() {
    return createUseStyles({});
}

function createLinuxUseStyles() {
    return createUseStyles({});
}

function createMacOSUseStyles() {
    return createUseStyles({});
}
