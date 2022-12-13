import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Login from '../../../features/login/login';
import Register from '../../../features/register/register';
import ProfilePage from '../../../features/profile/profilePage/profilePage';

const Explore = lazy(
    () => import('../../../features/tattoo/tattooPage/tattooPage')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Explore></Explore>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/profile"
                    element={<ProfilePage></ProfilePage>}
                ></Route>
                <Route path="" element={<Explore></Explore>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
