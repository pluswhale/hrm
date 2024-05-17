import { FC } from 'react';
import { Search } from 'react-bootstrap-icons';
import { FilterProps } from './types';

import styles from './filter.module.scss';

export const Filter: FC<FilterProps> = ({ title, filterSet, value, onChangeValue, onClickSearch }) => {
    const renderedInput = () => {
        if (!onChangeValue) {
            return <input className={styles.filter__input} placeholder="Поиск" />;
        } else {
            return (
                <input
                    value={value}
                    onChange={({ target }) => onChangeValue(target.value)}
                    className={styles.filter__input}
                    placeholder="Поиск"
                />
            );
        }
    };

    return (
        <div style={{ height: !filterSet ? '148px' : 'fit-content' }} className={styles.filter}>
            <div className={styles.filter__container}>
                <h3 className={styles.filter__title}>{title}</h3>

                <div className={styles.filter__input_wrapper}>
                    {renderedInput()}
                    <Search />
                </div>

                {filterSet && (
                    <div className={styles.filter__sets}>
                        {filterSet.map((set) => (
                            <div className={styles.filter__set}>
                                <h5 className={styles.filter__set_name}>{set.title}</h5>

                                <div className={styles.filter__set_rows}>
                                    {set.checkboxes.map((checkbox) => (
                                        <div className={styles.filter__set_row}>
                                            <span className={styles.filter__set_row__check}>{checkbox.name}</span>
                                            <span className={styles.filter__set_row__count}>1</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

