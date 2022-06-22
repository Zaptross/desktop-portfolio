import { useState } from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    children: React.ReactNode;
};

const useStyles = createUseStyles({});

export function Taskbar(props: Props) {
    return <div>{props.children}</div>;
}

export default Taskbar;
