import s from './LoginPage.module.css';
import React, { useCallback, useState } from 'react';
import { Input } from '../../shared/Input/Input.tsx';

export const LoginPage: React.FC = () => {
    const [formValues, setFormValues] = useState({ username: '', password: '', email: '' });
    const submitHandler = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }, []);

    return (
        <div className={s.body}>
            <section className={s.form}>
                <div className={s.form_header}>
                    <h1>Форма отправки</h1>
                </div>
                <div>
                    <form className={s.form_body}>
                        <label className={s.form_label}>
                            <Input
                                type='text'
                                name={'name'}
                                className={s.form_input}
                                placeholder={'username'}
                                value={formValues.username}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        username: e.currentTarget.value
                                    });
                                }}
                            />
                            <span></span>
                        </label>
                        <label className={s.form_label}>
                            <Input
                                type='text'
                                name={'password'}
                                className={s.form_input}
                                placeholder={'password'}
                                value={formValues.password}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        password: e.currentTarget.value
                                    });
                                }}
                            />
                            <span></span>
                        </label>
                        <label className={s.form_label}>
                            <Input
                                type='text'
                                name={'email'}
                                className={s.form_input}
                                placeholder={'email'}
                                value={formValues.email}
                                onChange={(e) => {
                                    setFormValues({ ...formValues, email: e.currentTarget.value });
                                }}
                            />
                            <span></span>
                        </label>

                        <button
                            type={'submit'}
                            onClick={(e) => {
                                submitHandler(e);
                            }}
                            className={s.form_submit}>
                            Отправить
                        </button>
                    </form>
                    <div className={s.form_footer}>Footer</div>
                </div>
            </section>
        </div>
    );
};
