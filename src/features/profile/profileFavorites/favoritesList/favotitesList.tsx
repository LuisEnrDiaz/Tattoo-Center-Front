import { UserI } from '../../../../infrastructure/types/typesUsers/typesUsers';
import { useUser } from '../../../user/hooks/useuser';
import { FavoritesItems } from '../favoritesItems/favoritesItems';
import style from './favoritesList.module.css';

export function FavoritesList() {
    const { users } = useUser();
    console.log((users.user as UserI).favorites, 'FAV');

    return (
        <>
            <h2>Favorites</h2>
            {users.user?.favorites ? (
                <div className={style.container}>
                    {(users.user as UserI).favorites.map((item) => (
                        <ul className={style.ul} key={item.id}>
                            <FavoritesItems item={item}></FavoritesItems>
                        </ul>
                    ))}
                </div>
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}
