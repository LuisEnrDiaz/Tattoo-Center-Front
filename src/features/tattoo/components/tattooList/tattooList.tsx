import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { useTattoo } from '../../hooks/usetattoo';
import { TattooItem } from '../tattooItems/tattooItems';

export function TattooList() {
    const { tattoos } = useTattoo();

    return (
        <div>
            {tattoos.map((item: TattooI) => (
                <ul key={item.id}>
                    <TattooItem item={item}></TattooItem>
                </ul>
            ))}
        </div>
    );
}
