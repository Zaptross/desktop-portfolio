import Moveable from '../Moveable/Moveable';
import { StyleProps, getUseStylesByTheme } from './desktopIconThemes';

type Props = StyleProps & {
    title: string;
    image: string;
    onDoubleClick: () => void;
};

export function DesktopIcon(props: Props) {
    const styles = getUseStylesByTheme(props.theme)(props);

    return (
        <div className={styles.desktopIcon} onDoubleClick={props.onDoubleClick}>
            <Moveable
                display={true}
                theme={props.theme}
                style={{ 'box-shadow': 'none' }}
            >
                <img src={props.image} className={styles.icon}></img>
                <p className={styles.title}>{props.title}</p>
            </Moveable>
        </div>
    );
}
