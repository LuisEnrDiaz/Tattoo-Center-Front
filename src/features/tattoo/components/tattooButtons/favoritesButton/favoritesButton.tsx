import { SyntheticEvent } from 'react';
import { useUser } from '../../../../user/hooks/useuser';
import style from './favoritesButton.module.css';

export function FavoritesButton({ id }: { id: string }) {
    const { handleAddFavorites } = useUser();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleAddFavorites(id);
    };

    return (
        <img
            className={style.button}
            src="./assets/corazon.png"
            onClick={handleAddClick}
            alt="corazon"
        ></img>
    );
}
