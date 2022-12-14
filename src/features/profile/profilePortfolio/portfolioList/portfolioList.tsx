import { UserI } from '../../../../infrastructure/types/typesUsers/typesUsers';
import { useUser } from '../../../user/hooks/useuser';
import { PortfolioItems } from '../portfolioItems/portfolioItems';
import style from './portfolioList.module.css';

export function PortfolioList() {
    const { users } = useUser();

    return (
        <>
            <h2 className={style.h2}>Portfolio</h2>
            {users.user?.favorites ? (
                <section className={style.container}>
                    {(users.user as UserI).portfolio.map((item) => (
                        <ul className={style.ul} key={item.id}>
                            <PortfolioItems item={item}></PortfolioItems>
                        </ul>
                    ))}
                </section>
            ) : (
                <h2>loading...</h2>
            )}
        </>
    );
}
