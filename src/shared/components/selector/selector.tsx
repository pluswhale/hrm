import { FC, ReactElement, useRef, useState } from 'react';
import styles from './selector.module.scss';
import { SelectorProps, Option } from './types';
import chevronUp from '../../../assets/chevron_up.svg';
import chevronDown from '../../../assets/chevron_down.svg';
import { useClickOutside } from 'shared/hooks/useClickOutside';

export const Selector: FC<SelectorProps> = ({ onChange, value, options }): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef<any>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedValue: Option) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    useClickOutside(dropDownRef, () => setIsOpen(false));

    return (
        <div className={styles.selector}>
            {options.map((optionGroup) => (
                <div key={optionGroup.id} className={styles.selector__wrapper}>
                    <input
                        type="text"
                        value={value?.label}
                        onClick={handleToggle}
                        placeholder={optionGroup.placeholder}
                        className={styles.selector__input}
                        readOnly
                    />
                    <img onClick={handleToggle} src={isOpen ? chevronUp : chevronDown} alt="selector icon" />
                    {isOpen && (
                        <div ref={dropDownRef} className={styles.selector__optionPanel}>
                            {optionGroup.options.map((option: Option) => (
                                <div
                                    key={option.value}
                                    className={`${styles.selector__option} ${value?.value === option.value ? styles.active : ''}`}
                                    onClick={() => handleOptionClick(option)}
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

