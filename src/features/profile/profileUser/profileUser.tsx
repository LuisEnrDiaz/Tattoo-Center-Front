import { TattooForm } from '../../tattoo/components/tattooForm/tattooForm';
import { useUser } from '../../user/hooks/useuser';
import { FavoritesList } from '../profileFavorites/favoritesList/favotitesList';
import { PortfolioList } from '../profilePortfolio/portfolioList/portfolioList';
import style from './profileUser.module.css';

export const ProfileUser = () => {
    const { users } = useUser();

    return (
        <div className={style.container}>
            <div className={style.container_Profile}>
                <div className={style.container_File}>
                    <img
                        className={style.file}
                        src={users.user?.image}
                        alt={users.user?.name}
                    />
                    <h2 className={style.name}>{users.user?.name}</h2>
                </div>
                <div className={style.line}></div>
                <div className={style.description}>
                    <p>{users.user?.description}</p>
                </div>
            </div>
            <div className={style.options}>
                <div className={style.favorites}>
                    {/* <FavoritesList></FavoritesList>
                    <PortfolioList></PortfolioList> */}{' '}
                    <TattooForm></TattooForm>
                </div>
            </div>
        </div>
    );
};
