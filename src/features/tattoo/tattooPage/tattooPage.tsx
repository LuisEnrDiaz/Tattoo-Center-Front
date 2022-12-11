import style from './tattooPage.module.css';
import { TattooList } from '../components/tattooList/tattooList';

function TattooPage() {
    return (
        <main className={style.container}>
            <TattooList></TattooList>
        </main>
    );
}

export default TattooPage;
