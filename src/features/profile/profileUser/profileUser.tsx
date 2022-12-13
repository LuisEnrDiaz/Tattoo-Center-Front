import { useUser } from '../../user/hooks/useuser';
import { FavoritesList } from '../profileFavorites/favoritesList/favotitesList';
import { PortfolioList } from '../profilePortfolio/portfolioList/portfolioList';

export const ProfileUser = () => {
    const { users } = useUser();

    return (
        <>
            <div>
                <img src={users.user?.image} alt={users.user?.name} />
                <h2>{users.user?.name}</h2>
            </div>
            <FavoritesList></FavoritesList>
            <PortfolioList></PortfolioList>
            <div>
                <p>{users.user?.description}</p>
            </div>
        </>
    );
};
