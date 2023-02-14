import { ProfileUser } from '../profileUser/profileUser';
import style from './profilePage.module.css';

function ProfilePage() {
    return (
        <>
            <main className={style.container}>
                <div className={style.header}>
                    <h2 className={style.h2}>Profile</h2>
                    <div className={style.buttons_position}>
                        <a href="#favouritesList">
                            <button className={style.button_options}>
                                Favorites
                            </button>
                        </a>
                        <a href="#portfolioList">
                            <button className={style.button_options}>
                                Portfolio
                            </button>
                        </a>
                        <a href="#createTattoo">
                            <button className={style.button_options}>
                                Upload
                            </button>
                        </a>
                    </div>
                </div>
                <ProfileUser></ProfileUser>
            </main>
        </>
    );
}

export default ProfilePage;
