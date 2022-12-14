import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { FavoritesButton } from '../tattooButtons/favoritesButton/favoritesButton';
import style from './tattooItems.module.css';

export function TattooItem({ item }: { item: TattooI }) {
    return (
        <li className={style.li} key={item.id}>
            <div className={style.favorites}>
                <FavoritesButton id={item.id}></FavoritesButton>
            </div>

            <img
                className={style.image}
                src={item.image}
                alt={item.image}
            ></img>
        </li>
    );
}
