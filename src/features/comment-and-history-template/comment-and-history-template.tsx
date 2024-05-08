import React, { useState } from 'react';
import BtnInfo from '../../shared/components/switch-tab/switch-tab';
import { CommentItem } from '../../entities/comment-item';
import { HistoryItem } from '../../entities/history-item';
import AddIcon from './../../assets/Add pic - icon.svg';
import Emodji from './../../assets/Frame 23459.svg';
import AddImage from './../../assets/Vector.svg';
import { Button } from '../../shared/components/button/button';

import style from './comment-and-history-template.module.scss';

const tabs = [{ label: 'Комментарии' }, { label: 'История' }];

const commentInfo = [
    {
        id: 1,
        author: 'Эйчар Менеджер',
        date: '31 марта 2024 13:40',
        text: 'Текст комментария. Это большой комментарий. Тут много разных замечаний, предположений, представим, что тут действительного много этого. На него нужно обратить внимание.',
    },
    {
        id: 2,
        author: 'Эйчар Менеджер',
        date: '31 марта 2024 13:40',
        text: 'Текст комментария. Это большой комментарий. Тут много разных замечаний, предположений, представим, что тут действительного много этого. На него нужно обратить внимание.',
    },
];

export const CommentAndHistoryTemplate = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className={style.container}>
            <BtnInfo tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
            {activeTab === 0 && (
                <div className={style.container__wrapper}>
                    <div className={style.container__card_comment}>
                        <textarea
                            placeholder="Новый комментарий..."
                            style={{
                                backgroundImage: `url(${Emodji})`,
                                backgroundPosition: 'top right',
                                backgroundRepeat: 'no-repeat',
                                padding: '10px',
                            }}
                        ></textarea>
                        <div className={style.container__card_bottom}>
                            <div className={style.container__card_bottom_img}>
                                <img className={style.container__card_img} src={AddImage} alt="AddImage" />
                                <img className={style.container__card_img} src={AddIcon} alt="AddIcon" />
                            </div>
                            <Button
                                styles={{ width: 'fit-content', height: '40px' }}
                                text="Опубликовать"
                                view="default_bg"
                            />
                        </div>
                    </div>
                    {commentInfo.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    <HistoryItem
                        icon={<img src={AddIcon} alt="Add" />}
                        title="Your Title"
                        value="Your Value"
                        userName="User Name"
                        isFirst={true}
                        isLast={true}
                    />
                </div>
            )}
        </div>
    );
};

