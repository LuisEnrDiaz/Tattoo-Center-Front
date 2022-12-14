import { SyntheticEvent } from 'react';
import { useUser } from '../user/hooks/useuser';

export function LogoutBtn() {
    const { handleLogout } = useUser();

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleLogout();
    };
    return (
        <>
            <button onClick={handleClick}>Logout</button>
        </>
    );
}
