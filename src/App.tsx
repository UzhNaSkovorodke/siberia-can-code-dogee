import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '@pages/LoginPage/LoginPage.tsx';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage.tsx';
import { RegistrationPage } from '@pages/RegistrationPage/RegistrationPage.tsx';

const App: React.FC = () => {
    const [
        isAuth
        // setIsAuth
    ] = useState<boolean>(true);
    const AuthRoute = () => {
        return (
            <Routes>
                <Route path={'/'} element={<LoginPage />} />
                <Route path={'/404'} element={<LoginPage />} />
                <Route path={'*'} element={<NotFoundPage />} />
                <Route path={'/registration'} element={<LoginPage />} />
            </Routes>
        );
    };
    const MainRoute = () => {
        return (
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path={'/404'} element={<NotFoundPage />} />
                <Route path={'*'} element={<LoginPage />} />
                <Route path={'/registration'} element={<RegistrationPage />} />
            </Routes>
        );
    };
    return (
        <BrowserRouter>{isAuth ? <MainRoute /> : <AuthRoute />}</BrowserRouter>
    );
};

export default App;
