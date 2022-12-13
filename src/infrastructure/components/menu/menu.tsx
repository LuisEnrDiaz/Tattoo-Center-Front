import { Link } from 'react-router-dom';
import style from './menu.module.css';
export function Menu() {
    const menuOptions = [
        { id: '1', path: '', label: 'Gallery' },
        { id: '2', path: 'login', label: 'Login' },
        { id: '3', path: 'register', label: 'Register' },
        { id: '4', path: 'profile', label: 'Profile' },
    ];
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
