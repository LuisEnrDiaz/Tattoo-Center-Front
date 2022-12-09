import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';

export function TattooItem({ item }: { item: TattooI }) {
    return (
        <li>
            <div>
                <div>
                    <img src={item.image} alt={item.image}></img>
                </div>

                <div>
                    <p>{item.categories}</p>
                    <p>{item.link}</p>
                </div>
            </div>
        </li>
    );
}
