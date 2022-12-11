import { SyntheticEvent } from 'react';
import { useTattoo } from '../../../hooks/usetattoo';

export function DeleteTattooButton({ id }: { id: string }) {
    const { handleDelete, handleLoad } = useTattoo();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log('HEEEEY SOY UN FAVORITO', { id });
        handleDelete(id);
        handleLoad();
    };

    return <button onClick={handleAddClick}>BORRAR</button>;
}
