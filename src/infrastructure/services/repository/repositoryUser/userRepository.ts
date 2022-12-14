import { RepoUser } from '../../../model/interfaces/interfaceUser/repositoryUser';
import { LoginUser, UserI } from '../../../types/typesUsers/typesUsers';

export class UserRepository implements RepoUser<UserI> {
    url: string;

    constructor() {
        this.url = 'http://localhost:7700/users';
    }

    createError(response: Response) {
        const message = `Error ${response.status} : ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    get(id: string): Promise<UserI> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    login(user: Partial<UserI>): Promise<LoginUser> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                localStorage.setItem('token', response.token);
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    register(user: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    addTattoosFavorites(id: string): Promise<{ user: UserI }> {
        return fetch(`${this.url}/addTattooFavorites`, {
            method: 'PATCH',
            body: JSON.stringify({ id }),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    deleteTattoosFavorites(id: string): Promise<{ user: UserI }> {
        return fetch(`${this.url}/deleteTattooFavorites`, {
            method: 'PATCH',
            body: JSON.stringify({ id }),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    deleteUser(id: string): Promise<void> {
        return fetch(this.url, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }
}
