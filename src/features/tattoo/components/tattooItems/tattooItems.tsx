import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteFavoriteButton } from '../tattooButtons/deleteFavoritesButton/deleteFavoriteButton';
import { DeleteButton } from '../tattooButtons/deleteTattoo/deleteTattoo';
import { FavoritesButton } from '../tattooButtons/favoritesButton/favoritesButton';
import style from './tattooItems.module.css';

export function TattooItem({ item }: { item: TattooI }) {
    return (
        <li className={style.li} key={item.id}>
            <img
                className={style.image}
                src={item.image}
                alt={item.image}
            ></img>

            <div>
                <FavoritesButton id={item.id}></FavoritesButton>
            </div>
            <div>
                <DeleteFavoriteButton id={item.id}></DeleteFavoriteButton>
            </div>
            <div>
                <DeleteButton id={item.id}></DeleteButton>
            </div>
            <div>
                <p>{item.categories}</p>
                <p>{item.link}</p>
            </div>
        </li>
    );
}
