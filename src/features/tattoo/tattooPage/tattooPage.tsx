import { Login } from '../../login/login';
import { Register } from '../../register/register';

import { TattooForm } from '../components/tattooForm/tattooForm';
import { TattooList } from '../components/tattooList/tattooList';
// import { TattooList } from '../components/tattooList/tattooList';

function TattooPage() {
    return (
        <main>
            <TattooList></TattooList>
            <Register></Register>
            <Login></Login>
            <TattooForm></TattooForm>
        </main>
    );
}

export default TattooPage;
