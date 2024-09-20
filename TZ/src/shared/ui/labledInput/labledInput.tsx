import {ChangeEvent, useRef} from 'react';
import s from './labledInput.module.scss';

type LabeledInputProps = {
    label?: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'date'; // Добавляем тип для инпута
    labelClassName?: string
};

export const LabeledInput: React.FC<LabeledInputProps> = ({
                                                              label,
                                                              value,
                                                              placeholder,
                                                              onChange,
                                                              labelClassName,
                                                              type = 'text'
                                                          }) => {
    const dateInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={s.inputGroup}>
            <label className={labelClassName}>{label}</label>
            <div className={s.inputWithIcon}>
                {type === 'date' ? <input
                    className={s.date}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={type === 'date' ? dateInputRef : null} // Привязываем реф к инпуту для даты
                /> : <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />}
            </div>
        </div>
    );
};
