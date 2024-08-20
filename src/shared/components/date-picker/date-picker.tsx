import { CSSProperties, FC, ReactElement, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse, isValid } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './date-picker.module.scss';

type Props = {
    isRequired: boolean;
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    labelText: string;
    placeholder: string;
    customStyles?: CSSProperties;
};

const DatePickerComponent: FC<Props> = ({
    selectedDate,
    labelText,
    isRequired,
    placeholder,
    customStyles,
    setSelectedDate,
}): ReactElement => {
    const [inputValue, setInputValue] = useState('');

    const validateDate = (dateStr: string) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19[0-9]{2}|2[0-4][0-9]{2}|2500)$/;
        return regex.test(dateStr);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        setInputValue(date ? format(date, 'dd.MM.yyyy', { locale: ru }) : '');
    };

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);

        if (validateDate(value)) {
            const parsedDate = parse(value, 'dd.MM.yyyy', new Date());
            if (isValid(parsedDate)) {
                setSelectedDate(parsedDate);
            } else {
                setSelectedDate(null); // Handle invalid date by setting null
            }
        } else {
            setSelectedDate(null); // If input is invalid, set date to null
        }
    };

    return (
        <label style={customStyles || {}} className={styles.label} htmlFor={labelText}>
            <span className={styles.label_text}>
                {labelText} {isRequired && <span className={styles.required_symbol}>*</span>}
            </span>
            <DatePicker
                locale={ru}
                name={labelText}
                className={styles.date_picker}
                selected={selectedDate}
                onChange={handleDateChange}
                wrapperClassName={styles.reactDatepickerWrapper}
                dateFormat="dd.MM.yyyy"
                customInput={<input value={inputValue} onChange={handleInputChange} />}
                placeholderText={placeholder}
            />
        </label>
    );
};

export default DatePickerComponent;

