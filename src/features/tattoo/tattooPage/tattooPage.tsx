import { TattooForm } from '../components/tattooForm/tattooForm';
import { TattooList } from '../components/tattooList/tattooList';

function TattooPage() {
    return (
        <main>
            <TattooList></TattooList>
            <TattooForm></TattooForm>
        </main>
    );
}

export default TattooPage;
