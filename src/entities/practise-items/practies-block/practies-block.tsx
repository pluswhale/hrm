import { FC, ReactElement } from 'react';
import styles from './practies-block.module.scss';
import { PractiesBlockProps } from './types';
import { PracticyItem } from '../practise-item';

export const PractiesBlock: FC<PractiesBlockProps> = ({ practies }): ReactElement => {
    return (
        <div className={styles.practies_block}>
            <div className={styles.practies_block__container}>
                <h4 className={styles.practies_block__title}>Набор на практику</h4>
                {practies && practies.map((stage: any) => <PracticyItem practicy={stage?.appeal} />)}
            </div>
        </div>
    );
};

