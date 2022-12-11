import { Menu } from '../menu/menu';
import style from './header.module.css';

export function Header() {
    const title = 'TATTOO CENTER';
    return (
        <header className={style.container}>
            <div className={style.container_logo}>
                <img
                    className={style.logo}
                    src="./assets/Logo.png"
                    alt="skull with mustache"
                ></img>

                <div className={style.title_text}>
                    <h1>{title}</h1>
                </div>
            </div>
            <div>
                <Menu></Menu>
            </div>
        </header>
    );
}
