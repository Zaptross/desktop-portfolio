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
    return createUseStyles({
        titleBar: {
            display: 'flex',
            backgroundColor: 'rgb(230 230 230)',
            color: 'black',
            width: '100%',
            cursor: 'move',
            borderStyle: 'solid',
            borderColor: 'rgb(78 130 170)',
            borderRadius: '7px 7px 0 0',
            borderWidth: '1px',
            borderBottom: 'none',
        },
        titleFill: {
            padding: '0.2em 0.5em',
            width: '75%',
            textAlign: 'left',
            margin: '0 auto',
        },
        titleClose: {
            padding: '0.2em 0.5em',
            width: '25%',
            textAlign: 'right',
            cursor: 'pointer',
        },
        content: {
            backgroundColor: 'rgb(250 250 250)',
            color: 'rgb',
            width: '100%',
            borderStyle: 'solid',
            borderColor: 'rgb(78 130 170)',
            borderWidth: '1px',
            borderTopColor: 'rgb(200 200 200)',
            borderRadius: '0 0 7px 7px',
        },
    });
}

function createLinuxUseStyles() {
    return createUseStyles({
        titleBar: {},
        titleFill: {},
        titleClose: {},
        content: {},
    });
}

function createMacOSUseStyles() {
    return createUseStyles({
        titleBar: {},
        titleFill: {},
        titleClose: {},
        content: {},
    });
}
