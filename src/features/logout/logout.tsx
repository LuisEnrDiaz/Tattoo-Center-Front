import { useUser } from '../user/hooks/useuser';

export function LogoutBtn() {
    const { handleLogout } = useUser();
    return (
        <>
            <a href="http://localhost:3000/tattoos">
                <button onClick={handleLogout}>Logout</button>
            </a>
        </>
    );
}
