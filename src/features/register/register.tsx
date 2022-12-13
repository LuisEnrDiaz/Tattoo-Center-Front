import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRepository } from '../../infrastructure/services/repository/repositoryUser/userRepository';
import { ProtoUserI } from '../../infrastructure/types/typesUsers/typesUsers';
import style from './register.module.css';

function Register() {
    const userServices = new UserRepository();

    const initialState: ProtoUserI = {
        name: '',
        email: '',
        password: '',
        image: '',
        favorites: [],
        portfolio: [],
        description: '',
    };

    const [value, setValue] = useState(initialState);
    const navigate = useNavigate();

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        navigate('/tattoos');
        userServices.register(value);
    };

    return (
        <div className={style.background}>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className={style.h2}>Sing Up</h2>
                        <p className={style.text}>
                            Sing up filling out the fields below.
                        </p>
                    </div>
                    <div>
                        <input
                            className={style.name}
                            type="text"
                            name="name"
                            value={value.name}
                            placeholder="Name"
                            onInput={handleForm}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={style.email}
                            type="email"
                            name="email"
                            value={value.email}
                            onInput={handleForm}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className={style.password}
                            type="password"
                            name="password"
                            value={value.password}
                            placeholder="Password"
                            onInput={handleForm}
                            required
                        />
                    </div>
                    {/* <div> */}
                    {/* <input type="file" name="" id="" /> */}
                    {/* <input
                            type="image"
                            src=""
                            alt=""
                            placeholder="Password"
                        /> */}
                    {/* </div> */}
                    {/* <div>
                        <input
                            className={style.name}
                            type="text"
                            name="description"
                            value={value.description}
                            onInput={handleForm}
                            placeholder="Description"
                        />
                    </div> */}
                    <p className={style.text}>
                        Are you already registered?
                        <Link className={style.text_login} to="/login">
                            Log in
                        </Link>
                    </p>
                    <div className={style.container_button}>
                        <button className={style.button} type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
