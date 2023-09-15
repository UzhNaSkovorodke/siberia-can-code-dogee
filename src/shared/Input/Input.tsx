import s from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isError?: boolean;
}

export const Input = ({ isError, ...props }: InputProps) => {
    const classNameStatus = isError ? 'error' : '';
    return <input className={[s.input, classNameStatus].join(' ')} {...props} />;
};
