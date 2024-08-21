import style from './comment_item.module.scss';
import Delete from './../../assets/Удалить.svg';
import Redact from './../../assets/Редактировать.svg';
import avatar from '../../assets/Ellipse 1.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { FC, useState } from 'react';
import { Comment } from 'shared/types/comment.type';
import { useMediaQuery } from 'react-responsive';
dayjs.locale('ru');

type Props = {
    comment: Comment;
    onDeleteComment: (commentId: number) => void;
    onEditComment: (commentId: number, text: string) => void;
};

export const CommentItem: FC<Props> = ({ comment, onDeleteComment, onEditComment }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [editedCommentText, setEditCommentText] = useState<string>('');
    const { id, author, text, created_at } = comment;

    const date = dayjs(created_at).format('D MMMM YYYY HH:mm');

    const onPressEdit = () => {
        setIsEditMode((prev) => !prev);
        setEditCommentText(text);
    };

    const onPressSaveAfterEdit = () => {
        onEditComment(id, editedCommentText);
        setIsEditMode(false);
        setEditCommentText('');
    };

    return (
        <div className={style.comment} key={id}>
            <div className={style.comment__wrapper}>
                <div>
                    <img
                        src={avatar}
                        style={{ objectFit: 'cover', borderRadius: '100%', height: '40px', width: '45px' }}
                        alt="avatar"
                    />
                </div>
                <div className={style.comment__card_title}>
                    <div className={'mx-0'}>
                        <span className={style.comment__title}>
                            {author?.name}
                            <div className={style.comment__img}>
                                <img onClick={onPressEdit} src={Redact} alt="Redact" />
                                <img onClick={() => onDeleteComment(comment?.id)} src={Delete} alt="Delete" />
                            </div>
                        </span>
                        <span className={style.comment__data}>
                            <span className={style.comment__data}>
                                {isMobile ? '' : 'написала комментарий'} {date}
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <div className={style.comment__text}>
                {!isEditMode ? (
                    <span className={style.comment__text_span}>{text}</span>
                ) : (
                    <div className={style.comment__edit}>
                        <textarea
                            className={style.comment__edit_textarea}
                            value={editedCommentText}
                            onChange={({ target }) => setEditCommentText(target.value)}
                        />
                        <button className={style.comment__edit_button} onClick={onPressSaveAfterEdit}>
                            Отредактировать
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

