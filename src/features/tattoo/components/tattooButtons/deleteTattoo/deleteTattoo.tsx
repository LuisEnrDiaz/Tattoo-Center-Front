import { SyntheticEvent } from 'react';

export function DeleteButton({ id }: { id: string }) {
    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    return (
        <img src="./assets/x.png" alt="delete" onClick={handleAddClick}></img>
    );
}
