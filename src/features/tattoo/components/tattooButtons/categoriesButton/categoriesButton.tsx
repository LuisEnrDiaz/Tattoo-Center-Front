import style from './categoriesButton.module.css';

export function CategoriesButton({ id }: { id: string }) {
    return (
        <div className={style.container}>
            <button>BLACK & GREY</button>
            <button>JAPONESE</button>
            <button>OLD SCHOOL</button>
            <button>TRIBAL</button>
            <button>TRADITIONAL</button>
            <button>REALISM</button>
        </div>
    );
}
