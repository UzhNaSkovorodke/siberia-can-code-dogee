import { forwardRef } from 'react';
import s from './Input.module.css';
import { classnames } from '@utils/index.ts';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isError?: boolean;
    tabIndex?: number;
    warningText?: string;
    className?: any;
    height?: string;
    radius?: string;
    post?: React.ReactNode;
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
            post,
            ...props
        },
        ref
    ) => {
        const classNameStatus: 'error' | 'warning' | 'normal' = isError
            ? 'error'
            : 'normal';
        // TODO почему classNameStatus error не отображается в dom
        return (
            <div className={s.input_wrapper}>
                <input
                    autoComplete='on'
                    className={classnames([
                        s.input,
                        post ? [''] : '',
                        s[`input__${classNameStatus}`],
                        className
                    ])}
                    style={{
                        height,
                        borderRadius: radius
                    }}
                    type={'text'}
                    {...props}
                    ref={ref}
                />
                <div className={s.post}>{post}</div>
                {warningText && isError && (
                    <span className={s.warning_text}>{warningText}</span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
