import React, { FC, ReactElement } from 'react';
import { SwitchTabProps } from './types';

import style from './switch-tab.module.scss';

const SwitchTab: FC<SwitchTabProps> = ({
    tabs,
    onTabClick,
    activeTab,
    design = 'default',
    onFirstButtonClick,
}): ReactElement => {
    const handleFirstButtonClick = () => {
        if (design === 'alternative' && activeTab === 0 && onFirstButtonClick) {
            onFirstButtonClick(); // Вызываем колбэк для первой кнопки в альтернативном дизайне
        } else {
            onTabClick(0);
        }
    };

    return (
        <div className={`${style.tabContainer} ${style[design]}`}>
            {tabs.map((tab, index) => (
                <React.Fragment key={index}>
                    <button
                        className={activeTab === index ? style.activeTab : style.tab}
                        onClick={() => (index === 0 ? handleFirstButtonClick() : onTabClick(index))}
                    >
                        {tab.label}
                    </button>
                    {index !== tabs.length - 1 && (
                        <div
                            className={`${style.separator} ${style[design === 'alternative' ? 'alternativeSeparator' : '']}`}
                        >
                            {design === 'alternative'}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default SwitchTab;

