import { FC, ReactElement, useState } from 'react';
import filterIcon from '../../assets/filter_mobile.svg';

import styles from './mobile-page-header.module.scss';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { Search } from '@mui/icons-material';

type Props = {
    titlePage: string;
    filter: ReactElement;
    switchTabs?: ReactElement;
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
};

export const MobilePageHeader: FC<Props> = ({
    titlePage,
    filter,
    switchTabs,
    searchValue,
    onChangeSearchValue,
}): ReactElement => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    return (
        <div className={styles.mobile_page_header}>
            <div className={styles.mobile_page_header__title_wrapper}>
                <span className={styles.mobile_page_header__title}>{titlePage}</span>
                <img onClick={() => setIsFilterOpen(true)} src={filterIcon} alt="filter icon" />
            </div>

            <div className={styles.mobile_page_header__input_wrapper}>
                <input
                    value={searchValue}
                    onChange={({ target }) => onChangeSearchValue(target.value)}
                    className={styles.mobile_page_header__input}
                    placeholder="Поиск"
                />
                <Search />
            </div>

            {switchTabs && switchTabs}
            <PopupWithDarkOverlay onClose={() => setIsFilterOpen(false)} isOpened={isFilterOpen}>
                {filter}
            </PopupWithDarkOverlay>
        </div>
    );
};

