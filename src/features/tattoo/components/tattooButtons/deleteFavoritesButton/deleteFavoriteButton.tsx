import { SyntheticEvent } from 'react';
import { useUser } from '../../../../user/hooks/useuser';

export function DeleteFavoriteButton({ id }: { id: string }) {
    const { handleDeleteFavorites } = useUser();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleDeleteFavorites(id);
    };

    return <button onClick={handleAddClick}>BORRAR</button>;
}
