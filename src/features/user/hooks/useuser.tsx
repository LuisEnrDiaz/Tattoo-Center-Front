import { useDispatch, useSelector } from 'react-redux';
import { UserRepository } from '../../../infrastructure/services/repository/repositoryUser/userRepository';
import { rootState } from '../../../infrastructure/store/store/store';
import * as action from '../reducerUser/actionCreator';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';

export const useUser = () => {
    const users = useSelector((state: rootState) => state.users);
    const serviceUser = new UserRepository();
    const dispatcher = useDispatch();

    const handleLogin = (user: Partial<UserI>) => {
        serviceUser
            .login(user)
            .then((response) =>
                dispatcher(action.loginActionCreator(response))
            );
    };

    const handleLogout = () => {
        dispatcher(action.logoutActionCreator(''));

        localStorage.removeItem('token');
    };

    const handleAddFavorites = (id: string) => {
        serviceUser.addTattoosFavorites(id).then((user) => {
            return dispatcher(action.addFavoritesActionCreator(user.user));
        });
    };

    const handleDeleteFavorites = (id: string) => {
        serviceUser.deleteTattoosFavorites(id).then((user) => {
            return dispatcher(action.deleteFavoritesActionCreator(user.user));
        });
    };

    const handleDelete = (id: string) => {
        console.log(id);
        serviceUser
            .deleteUser(id)
            .then(() => dispatcher(action.deleteActionCreator()));
    };

    return {
        users,
        handleLogin,
        handleAddFavorites,
        handleDeleteFavorites,
        handleLogout,
        handleDelete,
    };
};
