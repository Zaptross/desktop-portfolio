import React, { useState } from 'react';

import {
    Vec2,
    vec2Diff,
    vec2FromMouseEvent,
    vec2Sum,
} from '../../utils/vectors';
import { StyleProps, getUseStylesByTheme } from './moveableThemes';

type Props = StyleProps & {
    children: React.ReactNode;
    style?: Record<string, string | number>;
};

export function Moveable(props: Props) {
    const [getPosition, setPosition] = useState<Vec2>({ x: 100, y: 100 });
    const [getMouseOffset, setMouseOffset] = useState<Vec2>({ x: 0, y: 0 });
    const [getDisplay, setDisplay] = useState<boolean>(props.display);

    const classes = getUseStylesByTheme(props.theme)(props);

    return (
        <div
            className={classes.floaty}
            draggable
            onDragStart={(e) => {
                setDisplay(false);
                setMouseOffset(vec2Diff(vec2FromMouseEvent(e), getPosition));
            }}
            onDragEnd={(e) => {
                setPosition(
                    vec2Sum(
                        getPosition,
                        vec2Diff(getPosition, vec2FromMouseEvent(e)),
                        getMouseOffset
                    )
                );
            }}
            style={{
                left: `${getPosition.x}px`,
                top: `${getPosition.y}px`,
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
}

export default Moveable;
