import { TattooI } from '../../../model/types/typesTattoos/typesTattoos';
import { Repository } from '../../../model/interfaces/interfaceTattoo/repository';

export class TattooRepository implements Repository<TattooI> {
    url: string;

    constructor() {
        this.url = 'http://localhost:7700/tattoos';
    }

    createError(response: Response) {
        const message = `Error ${response.status} : ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<TattooI>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                return data.tattoos;
            });
    }

    get(id: string): Promise<TattooI> {
        return fetch(this.url, {
            method: 'GET',
            body: JSON.stringify(id),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    create(item: Partial<TattooI>): Promise<TattooI> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    update(item: Partial<TattooI>): Promise<TattooI> {
        return fetch(this.url, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    delete(id: string): Promise<void> {
        return fetch(this.url, {
            method: 'DELETE',
            body: JSON.stringify(id),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }
}
