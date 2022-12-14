import { SyntheticEvent } from 'react';

export function DeleteButton({ id }: { id: string }) {
    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    return <button onClick={handleAddClick}>ELIMINAR</button>;
}
