import { UserI } from '../../../../infrastructure/types/typesUsers/typesUsers';
import { useUser } from '../../../user/hooks/useuser';
import { FavoritesItems } from '../favoritesItems/favoritesItems';
import style from './favoritesList.module.css';

export function FavoritesList() {
    const { users } = useUser();

    return (
        <>
            <h2 className={style.h2}>Favorites</h2>
            {users.user?.favorites ? (
                <section className={style.container}>
                    {(users.user as UserI).favorites.map((item) => (
                        <ul className={style.ul} key={item.id}>
                            <FavoritesItems item={item}></FavoritesItems>
                        </ul>
                    ))}
                </section>
            ) : (
                <h2>loading...</h2>
            )}
        </>
    );
}
