import { SyntheticEvent, useState } from 'react';

import { useUser } from '../user/hooks/useuser';

export function Login() {
    const initialState = {
        name: '',
        password: '',
    };

    const { handleLogin, users } = useUser();
    const [value, setValue] = useState(initialState);

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await handleLogin(value);
        console.log(users.token);
        localStorage.setItem('token', users.token);
    };

    return (
        <>
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
        </>
    );
}
