import { SyntheticEvent, useState } from 'react';
import style from './login.module.css';
import { useUser } from '../user/hooks/useuser';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const initialState = {
        name: '',
        password: '',
    };

    const { handleLogin } = useUser();
    const [value, setValue] = useState(initialState);
    const navigate = useNavigate();

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        await handleLogin(value);
        navigate('/tattoos');
        setValue(initialState);
    };

    return (
        <div className={style.background}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className={style.h2}>Log in</h2>
                        <p className={style.text}>
                            welcome back! Log in to your account.
                        </p>
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
                    <p className={style.text}>
                        You are not registered yet?
                        <Link className={style.text_register} to="/register">
                            Sign up
                        </Link>
                    </p>
                    <div className={style.container_button}>
                        <button className={style.button} type="submit">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
