import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Explore = lazy(
    () => import('../../../features/tattoo/tattooPage/tattooPage')
);
const Login = lazy(() => import('../../../features/login/login'));
const Register = lazy(() => import('../../../features/register/register'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Explore></Explore>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="" element={<Explore></Explore>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
