import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../user/hooks/useuser';

export function LogoutBtn() {
    const { handleLogout } = useUser();
    const navigate = useNavigate();

    const handleClick = (event: SyntheticEvent) => {
        localStorage.clear();
        localStorage.setItem('token', '');
        global.location.reload();
        handleLogout();
        navigate('/tattoos');
    };
    return (
        <>
            <button onClick={handleClick}>Logout</button>
        </>
    );
}
