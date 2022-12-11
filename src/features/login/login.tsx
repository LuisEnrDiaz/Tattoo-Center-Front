import { SyntheticEvent, useState } from 'react';
import style from './login.module.css';
import { useUser } from '../user/hooks/useuser';

function Login() {
    const initialState = {
        name: '',
        password: '',
    };

    const { handleLogin } = useUser();
    const [value, setValue] = useState(initialState);

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await handleLogin(value);
    };

    return (
        <main className={style.background}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={value.name}
                            onInput={handleForm}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={value.password}
                            onInput={handleForm}
                        />
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </main>
    );
}

export default Login;
