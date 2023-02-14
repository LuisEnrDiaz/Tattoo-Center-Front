import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks/useuser';
import style from './deleteButton.module.css';

export function DeleteButtonUser() {
    const { handleDelete, users } = useUser();
    const navigate = useNavigate();

    const handleAddClick = (event: SyntheticEvent) => {
        event.preventDefault();
        navigate('/tattoos');
        handleDelete(users.user?.id as string);
    };

    return (
        <button className={style.button} onClick={handleAddClick}>
            Delete
        </button>
    );
}
