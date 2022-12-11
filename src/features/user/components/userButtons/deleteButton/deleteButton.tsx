import { SyntheticEvent } from 'react';
import { useUser } from '../../../../user/hooks/useuser';

export function DeleteButton({ id }: { id: string }) {
    const { handleDelete } = useUser();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log('HEEEEY SOY UN delete');
        handleDelete({ id });
    };

    return <button onClick={handleAddClick}>DEL</button>;
}
