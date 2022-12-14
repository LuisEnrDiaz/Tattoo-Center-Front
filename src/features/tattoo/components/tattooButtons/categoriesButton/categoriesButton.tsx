import style from './categoriesButton.module.css';

export function CategoriesButton({ id }: { id: string }) {
    return (
        <div className={style.container}>
            <button className={style.button_black}>BLACK & GREY</button>
            <button className={style.button}>JAPONESE</button>
            <button className={style.button}>OLD SCHOOL</button>
            <button className={style.button}>TRIBAL</button>
            <button className={style.button}>TRADITIONAL</button>
            <button className={style.button}>REALISM</button>
        </div>
    );
}
