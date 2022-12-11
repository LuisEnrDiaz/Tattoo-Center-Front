import { SyntheticEvent, useState } from 'react';
import { TattooRepository } from '../../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';
import { ProtoTattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';

export function TattooForm() {
    const initialState: ProtoTattooI = {
        image: '',
        categories: '',
        link: '',
        owner: '',
    };
    const tattooServices = new TattooRepository();

    const [value, setValue] = useState(initialState);

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        const tattoo = await tattooServices.create(value);

        return tattoo;
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <legend>Formumlario</legend>

                <div>
                    <input type="file" name="" required />
                </div>
                <div>
                    <label>CATEGORIES:</label>
                    <select
                        name="categories"
                        id="categories"
                        value={value.categories}
                        multiple={false}
                        onInput={handleForm}
                        required
                    >
                        <option></option>
                        <option value={'BLACK & GREY'}>BLACK & GREY</option>
                        <option value={'JAPANESE'}>JAPANESE</option>
                        <option value={'Old SCHOOL'}>Old SCHOOL</option>
                        <option value={'REALISM'}>REALISM</option>
                        <option value={'TRADITIONAL'}>TRADITIONAL</option>
                        <option value={'TRIBAL'}>TRIBAL</option>
                    </select>
                </div>
                <div>
                    <input
                        type="url"
                        name="link"
                        value={value.link}
                        placeholder="Link del studio"
                        onInput={handleForm}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
