import { forwardRef } from 'react';
import s from './Input.module.css';
import { classnames } from '@utils/index.ts';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isError?: boolean;
    tabIndex?: number;
    warningText?: string;
    className?: any;
    height?: string;
    radius?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            isError = false,
            warningText,
            className,
            tabIndex = 1,
            radius = '5px',
            height,
            ...props
        },
        ref
    ) => {
        const classNameStatus: 'error' | 'warning' | '' = isError
            ? 'error'
            : '';
        return (
            <div className={s.input_wrapper}>
                <input
                    className={classnames([
                        s.input,
                        [`input__${classNameStatus}`],
                        className
                    ])}
                    style={{
                        height,
                        borderRadius: radius
                    }}
                    {...props}
                    ref={ref}
                />
                {warningText && isError && (
                    <span className={s.warning_text}>{warningText}</span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
