import { forwardRef } from 'react';
import s from './Button.module.css';
import { classnames } from '@utils/index.ts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tabIndex?: number;
    bgColor?: string;
    className?: any;
    radius?: string;
    height?: string;
    isDisabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'word';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            tabIndex = 1,
            bgColor = 'primary',
            radius = '5px',
            height = '40px',
            type,
            variant,
            isDisabled = false,
            children,
            onClick = () => {},
            ...props
        },
        ref
    ) => {
        return (
            <button
                type={type}
                ref={ref}
                className={classnames([
                    s.button,
                    className,
                    s[`button__color_${bgColor}`],
                    s[`button__variant_${variant}`]
                ])}
                tabIndex={tabIndex}
                style={{
                    height,
                    borderRadius: radius
                }}
                onClick={() => {
                    onClick();
                }}
                disabled={isDisabled}
                {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
