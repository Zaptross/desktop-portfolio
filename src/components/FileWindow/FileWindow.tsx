import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../utils/themes';
import { Moveable } from '../Moveable/Moveable';
import { getUseStylesByTheme } from './fileWindowThemes';

type Props = {
    children: React.ReactNode;
    theme: Theme;
    title: string;
};

export function FileWindow(props: Props) {
    const [getDisplay, setDisplay] = useState<boolean>(true);

    const classes = getUseStylesByTheme(props.theme)(props);

    return (
        <Moveable theme={props.theme} display={true}>
            <div style={{ display: getDisplay ? 'block' : 'none' }}>
                <div className={classes.titleBar}>
                    <span className={classes.titleFill}>{props.title}</span>
                    <span
                        className={classes.titleClose}
                        onClick={() => setDisplay(false)}
                    >
                        X
                    </span>
                </div>
                <div className={classes.content}>{props.children}</div>
            </div>
        </Moveable>
    );
}

export default FileWindow;
