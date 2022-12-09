import style from './footer.module.css';

export function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <div>
                    <img src="./assets/@.png" alt="@"></img>
                    <p>luis.enr.diaz.garcia@gmail.com</p>
                </div>
                <div>
                    <img
                        className={style.logo}
                        src="./assets/Logo.png"
                        alt="skull with mustache"
                    />
                </div>
                <div>
                    <img src="./assets/facebook.png" alt="logo facebook" />
                    <img src="./assets/instagram.png" alt="logo instagram" />
                    <img src="./assets/twitter.png" alt="logo twitter" />
                    <img src="./assets/youtube.png" alt="logo youtube" />
                </div>
            </div>
        </footer>
    );
}
