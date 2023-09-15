import s from './LoginPage.module.css';
import React from 'react';
import { Input } from '../../shared/Input/Input.tsx';
import { Button } from '../../shared/Button/Button.tsx';
import { useForm } from 'react-hook-form';

export const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submitHandler = () => {
        alert('submit!');
    };

    return (
        <div className={s.body}>
            <section className={s.form}>
                <div className={s.form_header}>
                    <h1>DOGGEE</h1>
                </div>

                <div>
                    <form
                        className={s.form_body}
                        onSubmit={handleSubmit(submitHandler)}>
                        <label className={s.form_label}>
                            <Input
                                {...register('username', { required: true })}
                                type='text'
                                className={s.form_input}
                                placeholder={'username'}
                                isError={Boolean(errors.username)}
                                warningText={'Введите имя пользователя'}
                            />
                        </label>
                        <label className={s.form_label}>
                            <Input
                                {...register('password', { required: true })}
                                type='text'
                                className={s.form_input}
                                placeholder={'password'}
                                isError={Boolean(errors.password)}
                                warningText={'Введите пароль'}
                            />
                        </label>
                        <label className={s.form_label}>
                            <Input
                                {...register('email')}
                                type='text'
                                className={s.form_input}
                                placeholder={'email'}
                                isError={Boolean(errors.email)}
                                warningText={'Введите email'}
                            />
                        </label>
                        <Button type={'submit'} className={s.form_submit}>
                            Отправить
                        </Button>
                    </form>

                    <div className={s.form_footer}>
                        <Button
                            variant={'word'}
                            onClick={() => {
                                console.log('to create new account');
                            }}>
                            create new account
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};