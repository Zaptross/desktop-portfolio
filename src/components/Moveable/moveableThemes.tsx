import { createUseStyles } from 'react-jss';
import { Theme } from '../../utils/themes';

export type StyleProps = {
    theme: Theme;
    display: boolean;
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
    return createUseStyles({
        floaty: {
            position: 'absolute',
            zIndex: '9999',
            display: ({ display }: StyleProps) => (display ? 'block' : 'none'),
            boxShadow: `rgb(0 0 0 / 60%) 0 0 10px 0`,
            borderRadius: '7px',
        },
    });
}

function createLinuxUseStyles() {
    return createUseStyles({ floaty: { backgroundColor: 'magenta' } });
}

function createMacOSUseStyles() {
    return createUseStyles({ floaty: { backgroundColor: 'magenta' } });
}
