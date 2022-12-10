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
            .then((response: string) =>
                dispatcher(action.loginActionCreator(response))
            );
    };

    const handleAddFavorites = (id: string) => {
        serviceUser
            .addTattoosFavorites(id)
            .then((user) => dispatcher(action.addFavoritesActionCreator(user)));
    };

    return {
        users,
        handleLogin,
        handleAddFavorites,
    };
};
