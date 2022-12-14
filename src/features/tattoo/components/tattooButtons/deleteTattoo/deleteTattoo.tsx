import { SyntheticEvent } from 'react';
import { useTattoo } from '../../../hooks/usetattoo';

export function DeleteButton({ id }: { id: string }) {
    // const { handleDelete } = useTattoo();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        // handleDelete(id);
    };

    return <button onClick={handleAddClick}>ELIMINAR</button>;
}
