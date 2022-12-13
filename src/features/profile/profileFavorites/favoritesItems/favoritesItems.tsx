import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteFavoriteButton } from '../../../tattoo/components/tattooButtons/deleteFavoritesButton/deleteFavoriteButton';
import style from './favoritesItems.module.css';

export function FavoritesItems({ item }: { item: TattooI }) {
    return (
        <>
            <li className={style.li} key={item.id}>
                <div className={style.favorites}>
                    <DeleteFavoriteButton id={item.id}></DeleteFavoriteButton>
                </div>

                <img
                    className={style.image}
                    src={item.image}
                    alt={item.image}
                ></img>
            </li>
        </>
    );
}
