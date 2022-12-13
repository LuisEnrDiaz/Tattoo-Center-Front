import { UserI } from '../../../../infrastructure/types/typesUsers/typesUsers';
import { useUser } from '../../../user/hooks/useuser';
import { PortfolioItems } from '../portfolioItems/portfolioItems';
import style from './portfolioList.module.css';

export function PortfolioList() {
    const { users } = useUser();

    return (
        <>
            <h2>Portfolio</h2>
            {users.user?.favorites ? (
                <div className={style.container}>
                    {(users.user as UserI).portfolio.map((item) => (
                        <ul className={style.ul} key={item.id}>
                            <PortfolioItems item={item}></PortfolioItems>
                        </ul>
                    ))}
                </div>
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}
