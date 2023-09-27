import s from './NotFoundPage.module.css';
import React from 'react';

export const NotFoundPage: React.FC = () => {
    return (
        <div className={s.body}>
            <section className={s.notFound}>
                <h1>NotFound</h1>
            </section>
        </div>
    );
};
