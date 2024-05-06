import { Portal } from '../portal/portal';
import style from './Popup.module.scss';

type Props = {
    children: any;
    onClose?: Function;
    isOpened: boolean;
};

export const PopupWithoutOverlay = ({ children, onClose, isOpened }: Props) => {
    if (!isOpened) return null;
    return (
        <Portal>
            <div className={style.container} role="dialog">
                <div className={style.overlay} role="button" onClick={() => (onClose ? onClose() : null)} />
                <div className={style.content}>{children}</div>
            </div>
        </Portal>
    );
};

