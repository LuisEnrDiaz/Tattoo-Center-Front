import { Link } from 'react-router-dom';
import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteButton } from '../tattooButtons/deleteTattoo/deleteTattoo';
import { FavoritesButton } from '../tattooButtons/favoritesButton/favoritesButton';
import style from './tattooItems.module.css';

export function TattooItem({ item }: { item: TattooI }) {
    return (
        <li className={style.li} key={item.id}>
            <div className={style.favorites}>
                <FavoritesButton id={item.id}></FavoritesButton>
                <DeleteButton id={item.id}></DeleteButton>
            </div>

            <img
                className={style.image}
                src={item.image}
                alt={item.image}
            ></img>

            {/* <div>
                <p>{item.categories}</p>
                <p>{item.link}</p>
            </div> */}
        </li>
    );
}
