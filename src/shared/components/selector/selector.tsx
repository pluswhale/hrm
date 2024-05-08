import React, { FC, ReactElement, useState } from 'react';
import styles from './selector.module.scss';
import { SelectorProps, Option } from './types';
import arrow from '../../../assets/Vector 2.svg'

export const Selector: FC<SelectorProps> = ({ onChange, value, options }): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedValue: string) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            {options.map((optionGroup) => (
                <div key={optionGroup.id} className={styles.container__optionGroup}>
                    <input
                        type="text"
                        value={value}
                        onClick={handleToggle}
                        placeholder={optionGroup.placeholder}
                        className={styles.container__input}
                        readOnly
                    />
                    {isOpen && (
                        <div className={styles.container__optionPanel}>
                            {optionGroup.options.map((option: Option) => (
                                <div
                                    key={option.value}
                                    className={styles.container__option}
                                    onClick={() => handleOptionClick(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
