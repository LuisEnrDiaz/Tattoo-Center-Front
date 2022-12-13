import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteFavoriteButton } from '../../../tattoo/components/tattooButtons/deleteFavoritesButton/deleteFavoriteButton';
import style from './portfolioItems.module.css';

export function PortfolioItems({ item }: { item: TattooI }) {
    return (
        <>
            <li className={style.li} key={item.id}>
                <div className={style.portfolio}>
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
