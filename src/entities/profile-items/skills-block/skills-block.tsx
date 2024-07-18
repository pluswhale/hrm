import { FC, ReactElement } from 'react';
import styles from './skills-block.module.scss';
import { SkillsBlockProps } from './types';

export const SkillsBlock: FC<SkillsBlockProps> = ({ skills }): ReactElement => {
    return (
        <div className={styles.skills_block}>
            <h2 className={styles.skills_block__title}>Ключевые навыки</h2>
            <div className={styles.skills_block__skills_wrapper}>
                {skills?.map((skill, index) => (
                    <span key={index} className={styles.skills_block__skill}>
                        {/*@ts-ignore */}
                        {skill?.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

