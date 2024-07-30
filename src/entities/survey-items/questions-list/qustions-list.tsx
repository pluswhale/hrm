import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { Question_SURVEY } from '../../../redux/slices/create-survey';

import redaction from '../../../assets/Редактировать.svg';
import Delete from '../../../assets/Удалить.svg';
import AddIcon from '@mui/icons-material/Add';
import {
    addNewOptionInQuestion,
    editQuestion,
    changeModeInQuestionOrOption,
    deleteOption,
    deleteQuestion,
} from '../../../redux/slices/create-survey';

import styles from './question-list.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { Input } from '@mui/material';

type Props = {
    questions: Question_SURVEY[];
};

export const QuestionList: FC<Props> = ({ questions }): ReactElement => {
    const dispatch = useAppDispatch();
    const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
    const [editState, setEditState] = useState<{ questionPosition: number; optionPosition: number | string }>({
        questionPosition: -1,
        optionPosition: '',
    });

    useEffect(() => {
        const key = `${editState.questionPosition}-${editState.optionPosition}`;
        if (inputRefs.current[key]) {
            inputRefs.current[key].focus();
        }
    }, [editState]);

    const handleEditClick = (questionPosition: number, optionPosition: number | string) => {
        setEditState({ questionPosition, optionPosition });

        let changeObject = {
            questionPosition,
            mode: 'edit',
        } as any;

        if (optionPosition) {
            changeObject.optionPosition = optionPosition;
        }

        dispatch(changeModeInQuestionOrOption(changeObject));
    };
    return (
        <div className={styles.question_list}>
            {questions &&
                questions?.map((question, index) => {
                    return (
                        <div key={index + 'question'} className={styles.question_list__container}>
                            <span className={styles.question_list__question}>
                                {question?.mode === 'read' ? (
                                    <span>{question?.question}</span>
                                ) : (
                                    <Input
                                        ref={(el) => (inputRefs.current[`${question.position}-`] = el)}
                                        value={question?.question}
                                        onChange={({ target }) =>
                                            dispatch(
                                                editQuestion({
                                                    questionPosition: question.position,
                                                    value: target.value,
                                                }),
                                            )
                                        }
                                        onBlur={() =>
                                            dispatch(
                                                changeModeInQuestionOrOption({
                                                    questionPosition: question.position,
                                                    mode: 'read',
                                                }),
                                            )
                                        }
                                    />
                                )}
                                <div className={styles.question_list__image_wrapper}>
                                    <img
                                        onClick={() => {
                                            handleEditClick(question.position, '');
                                        }}
                                        className={styles.question_list__icon}
                                        src={redaction}
                                        alt=""
                                    />
                                    <img
                                        onClick={() =>
                                            dispatch(deleteQuestion({ questionPosition: question.position }))
                                        }
                                        className={styles.question_list__icon}
                                        src={Delete}
                                        alt=""
                                    />
                                </div>
                            </span>
                            {question?.options &&
                                question.options?.map((option, index) => {
                                    let variant = <></>;
                                    if (
                                        option.mode === 'edit' &&
                                        (option.type === 'one_variant' || option.type === 'multiple_variants')
                                    ) {
                                        variant = (
                                            <Input
                                                ref={(el) =>
                                                    (inputRefs.current[`${question.position}-${option.position}`] = el)
                                                }
                                                value={option?.option_name}
                                                onChange={({ target }) =>
                                                    dispatch(
                                                        editQuestion({
                                                            questionPosition: question.position,
                                                            optionPosition: option.position,
                                                            value: target.value,
                                                        }),
                                                    )
                                                }
                                                onBlur={() =>
                                                    dispatch(
                                                        changeModeInQuestionOrOption({
                                                            questionPosition: question.position,
                                                            optionPosition: option.position,
                                                            mode: 'read',
                                                        }),
                                                    )
                                                }
                                                onAbort={() =>
                                                    dispatch(
                                                        changeModeInQuestionOrOption({
                                                            questionPosition: question.position,
                                                            optionPosition: option.position,
                                                            mode: 'read',
                                                        }),
                                                    )
                                                }
                                            />
                                        );
                                    } else {
                                        switch (option.type) {
                                            case 'one_variant': {
                                                variant = <span>O {option?.option_name}</span>;
                                                break;
                                            }
                                            case 'multiple_variants': {
                                                variant = <span>M {option?.option_name}</span>;
                                                break;
                                            }
                                            case 'long_text': {
                                                variant = <span>Длинный текст</span>;
                                                break;
                                            }
                                            case 'short_text': {
                                                variant = <span>Короткий текст</span>;
                                                break;
                                            }
                                            default:
                                                variant = <></>;
                                        }
                                    }

                                    return (
                                        <span key={index + 'option'} className={styles.question_list__option_row}>
                                            {variant}
                                            <div className={styles.question_list__image_wrapper}>
                                                <img
                                                    onClick={() => {
                                                        handleEditClick(question.position, option.position);
                                                    }}
                                                    className={styles.question_list__icon}
                                                    src={redaction}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteOption({
                                                                questionPosition: question.position,
                                                                optionPosition: option.position,
                                                            }),
                                                        )
                                                    }
                                                    className={styles.question_list__icon}
                                                    src={Delete}
                                                    alt=""
                                                />
                                            </div>
                                        </span>
                                    );
                                })}
                            <AddIcon
                                onClick={() =>
                                    dispatch(
                                        addNewOptionInQuestion({
                                            questionPosition: question?.position,
                                            optionType: question.type,
                                        }),
                                    )
                                }
                            />
                        </div>
                    );
                })}
        </div>
    );
};

