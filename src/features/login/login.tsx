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
        setValue(initialState);
    };

    return (
        <div className={`${style.background} ${style.active}`}>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <div className={style.close}></div>
                    <div className={style.text}>
                        <h2>Log in</h2>
                        <p>welcome back! Log in to your account.</p>
                    </div>
                    <div>
                        <input
                            className={style.name}
                            autoComplete="off"
                            type="text"
                            name="name"
                            value={value.name}
                            placeholder="Username"
                            onInput={handleForm}
                        />
                    </div>
                    <div>
                        <input
                            className={style.password}
                            autoComplete="off"
                            type="password"
                            name="password"
                            value={value.password}
                            placeholder="Password"
                            onInput={handleForm}
                        />
                    </div>
                    <div>
                        <button className={style.button} type="submit">
                            Log in
                        </button>
                    </div>
                </form>
            </div>

            <script src="activate.tsx"></script>
        </div>
    );
}

export default Login;
