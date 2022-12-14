import { Link } from 'react-router-dom';
import { useUser } from '../../../features/user/hooks/useuser';
import style from './menu.module.css';
export function Menu() {
    const { users } = useUser();
    const menuOptions = [{ id: '1', path: '', label: 'Gallery' }];

    if (!users.isLogged) {
        menuOptions.push(
            { id: '2', path: 'login', label: 'Login' },
            { id: '3', path: 'register', label: 'Register' }
        );
    } else {
        menuOptions.push(
            { id: '4', path: 'profile', label: 'Profile' },
            { id: '5', path: 'logout', label: 'Logout' }
        );
    }
    return (
        <nav>
            <ul className={style.ul}>
                {menuOptions.map((item) => (
                    <li key={item.id} className={style.li}>
                        <Link className={style.text} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
