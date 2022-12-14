import { useEffect } from 'react';
import { TattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { useTattoo } from '../../hooks/usetattoo';
import { CategoriesButton } from '../tattooButtons/categoriesButton/categoriesButton';
import { TattooItem } from '../tattooItems/tattooItems';
import style from './tattooList.module.css';

export function TattooList() {
    const { tattoos, handleLoad } = useTattoo();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <h2 className={style.text}>Gallery Tattoos</h2>
            <CategoriesButton id={''}></CategoriesButton>
            <div className={style.container}>
                {tattoos.map((item: TattooI) => (
                    <ul className={style.ul} key={item.id}>
                        <TattooItem item={item}></TattooItem>
                    </ul>
                ))}
            </div>
        </>
    );
}
