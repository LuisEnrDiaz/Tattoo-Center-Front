import { Link } from 'react-router-dom';
import style from './menu.module.css';
export function Menu() {
    const menuOptions = [
        { id: '1', path: '', label: 'Explore' },
        { id: '2', path: 'login', label: 'Login' },
        { id: '3', path: 'register', label: 'Register' },
    ];
    return (
        <nav>
            <ul className={style.ul}>
                {menuOptions.map((item) => (
                    <li key={item.id} className={style.li}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
