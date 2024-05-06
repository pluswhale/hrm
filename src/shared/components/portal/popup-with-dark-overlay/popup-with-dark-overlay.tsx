import { ReactElement } from 'react';
import { Portal } from '../portal/portal';
import style from './popup.module.scss';

type Props = {
    children: ReactElement | ReactElement[];
    onClose: Function;
    isOpened: boolean;
};

export const PopupWithDarkOverlay = ({ children, onClose, isOpened }: Props) => {
    if (!isOpened) return null;

    return (
        <Portal>
            <div className={style.container} role="dialog">
                <div className={style.overlay} role="button" onClick={() => onClose()} />
                <div className={style.content}>{children}</div>
            </div>
        </Portal>
    );
};

