import { SyntheticEvent } from 'react';
import { useUser } from '../../../../user/hooks/useuser';

export function FavoritesButton({ id }: { id: string }) {
    const { handleAddFavorites } = useUser();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleAddFavorites(id);
    };

    return <button onClick={handleAddClick}>fa</button>;
}
