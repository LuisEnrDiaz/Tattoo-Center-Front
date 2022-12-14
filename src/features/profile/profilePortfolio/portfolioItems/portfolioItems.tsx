import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { DeleteButton } from '../../../tattoo/components/tattooButtons/deleteTattoo/deleteTattoo';
import style from './portfolioItems.module.css';

export function PortfolioItems({ item }: { item: TattooI }) {
    return (
        <>
            <li className={style.li} key={item.id}>
                <div className={style.portfolio}>
                    <DeleteButton id={item.id}></DeleteButton>
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
