import { SyntheticEvent, useState } from 'react';
import { useUser } from '../../../../user/hooks/useuser';

export function FavoritesButton({ id }: { id: string }) {
    const [favorite, setFavorite] = useState(false);
    const { handleAddFavorites } = useUser();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setFavorite(true);
        handleAddFavorites(id);
    };

    return (
        <>
            <img
                src="./assets/corazon.png"
                onClick={handleAddClick}
                // style={{
                //     backgroundColor: favorite === true ? 'red' : '',
                // }}
                defaultValue={'false'}
                alt="corazon"
            ></img>
        </>
    );
}
