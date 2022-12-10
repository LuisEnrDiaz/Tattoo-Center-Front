import { SyntheticEvent, useState } from 'react';
import { UserRepository } from '../../infrastructure/services/repository/repositoryUser/userRepository';
import { ProtoUserI } from '../../infrastructure/types/typesUsers/typesUsers';

export function Register() {
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

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        userServices.register(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <legend>Formulario User</legend>
            <div>
                <input
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
                    type="email"
                    name="email"
                    value={value.email}
                    onInput={handleForm}
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={value.password}
                    placeholder="Password"
                    onInput={handleForm}
                    required
                />
            </div>
            <div>
                <input type="file" name="" id="" />
                <input type="image" src="" alt="" placeholder="Password" />
            </div>
            <div>
                <input
                    type="text"
                    name="description"
                    value={value.description}
                    onInput={handleForm}
                    placeholder="Description"
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
