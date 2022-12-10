import TattooPage from '../../../features/tattoo/tattooPage/tattooPage';
import { UserRepository } from '../../services/repository/repositoryUser/userRepository';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

// const prueba = async () => {
//     const repo = new UserRepository();
//     const user = {
//         name: 'lorenzo',
//         password: '123456789',
//     };
//     const test = await repo.login(user);
//     console.log(test);
// };
// prueba();

function App() {
    return (
        <>
            <Header></Header>
            <TattooPage></TattooPage>
            <Footer></Footer>
        </>
    );
}
export default App;
