import { ProfileUser } from '../profileUser/profileUser';
import style from './profilePage.module.css';

function ProfilePage() {
    return (
        <>
            <main className={style.container}>
                <h2>Profile</h2>
                <ProfileUser></ProfileUser>
            </main>
        </>
    );
}

export default ProfilePage;
