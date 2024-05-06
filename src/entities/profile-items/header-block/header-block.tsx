import { FC, ReactElement } from 'react';
import { HeaderBlockProps } from './types';

import styles from './header-block.module.scss';

export const HeaderBlock: FC<HeaderBlockProps> = ({name, avatar, profession}): ReactElement => {

    return (
        <div className={styles.header_block}>
            <img className={styles.header_block__img} src={avatar} alt='logo' />
            <div className={styles.header_block__container}>
                <h2 className={styles.header_block__name}>
                    {name}
                </h2>
                <span className={styles.header_block__profession}>
                    {profession}
                </span>
            </div>
        </div>
    );
}