import style from './footer.module.css';

export function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <div className={style.container_email}>
                    <img
                        className={style.email}
                        src="./assets/@.png"
                        alt="@"
                    ></img>
                    <p className={style.email_text}>
                        luis.enr.diaz.garcia@gmail.com
                    </p>
                </div>
                <div className={style.container_logo}>
                    <img
                        className={style.logo}
                        src="./assets/Logo.png"
                        alt="skull with mustache"
                    />
                    <div className={style.container_copyright}>
                        <img
                            className={style.copyright}
                            src="./assets/copyright.png"
                            alt="copyright"
                        />
                        <p className={style.copyright_text}>
                            TATTOO CENTER Madrid, España 2020 All rights
                            reserved
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className={style.social}
                        src="./assets/facebook.png"
                        alt="logo facebook"
                    />
                    <img
                        className={style.social}
                        src="./assets/instagram.png"
                        alt="logo instagram"
                    />
                    <img
                        className={style.social}
                        src="./assets/twitter.png"
                        alt="logo twitter"
                    />
                    <img
                        className={style.social}
                        src="./assets/youtube.png"
                        alt="logo youtube"
                    />
                </div>
            </div>
        </footer>
    );
}
