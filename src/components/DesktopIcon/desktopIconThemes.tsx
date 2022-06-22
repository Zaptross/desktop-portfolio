import { createUseStyles } from 'react-jss';
import { complexTextStroke, Theme } from '../../utils/themes';

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
    return createUseStyles({
        desktopIcon: {
            display: 'flex',
            flexDirection: 'column',
        },
        icon: {
            width: '96px',
            height: '96px',
        },
        title: {
            fontSize: '1.5em',
            textAlign: 'center',
            color: 'white',
            margin: 0,
            'text-shadow': `0 0 5px black, ${complexTextStroke['text-shadow']}`,
        },
    });
}

function createLinuxUseStyles() {
    return createUseStyles({ desktopIcon: {}, icon: {}, title: {} });
}

function createMacOSUseStyles() {
    return createUseStyles({ desktopIcon: {}, icon: {}, title: {} });
}
