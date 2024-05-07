import { FC, ReactElement } from 'react';
import styles from './practies-block.module.scss';
import { PractiesBlockProps } from './types';
import { PracticyItem } from '../practise-item';

export const PractiesBlock: FC<PractiesBlockProps> = ({practies}): ReactElement => {
    return (
        <div className={styles.practies_block}>
            <div className={styles.practies_block__container}>
            <p>Набор на практику</p>
                {practies && practies.map((practicy) => <PracticyItem practicy={practicy}/>)}
            </div>
        </div>
    )
}