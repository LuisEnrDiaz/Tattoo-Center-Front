import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteTattooButton } from '../tattooButtons/deleteFavoritesButton/deleteButton';
import { FavoritesButton } from '../tattooButtons/favoritesButton/favoritesButton';

export function TattooItem({ item }: { item: TattooI }) {
    return (
        <li key={item.id}>
            <div>
                <div>
                    <img src={item.image} alt={item.image}></img>
                </div>
                <div>
                    <FavoritesButton id={item.id}></FavoritesButton>
                </div>
                <div>
                    <DeleteTattooButton id={item.id}></DeleteTattooButton>
                </div>
                <div>
                    <button></button>
                </div>
                <div>
                    <p>{item.categories}</p>
                    <p>{item.link}</p>
                </div>
            </div>
        </li>
    );
}
