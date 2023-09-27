import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage.tsx';
import { RegistrationPage } from '@pages/RegistrationPage/RegistrationPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/registration',
        element: <RegistrationPage />
    },
    {
        path: '/404',
        element: <NotFoundPage />
    }
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
