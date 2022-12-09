import { SyntheticEvent, useState } from 'react';
import { ProtoTattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';

export function TattooForm() {
    const tattoo: ProtoTattooI = {
        image: '',
        categories: [],
        link: '',
        owner: '',
    };

    const [value, setValue] = useState(tattoo);

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;

        setValue({ ...value, [element.name]: element.value });
    };

    const handlerSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handlerSubmit}>
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
