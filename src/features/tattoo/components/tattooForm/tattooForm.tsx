/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent, useState } from 'react';
import { app } from '../../../../infrastructure/services/firebase/configFireBase';
import { TattooRepository } from '../../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';
import { ProtoTattooI } from '../../../../infrastructure/types/typesTattoos/typesTattoos';
import { useTattoo } from '../../hooks/usetattoo';
import style from './tattooForm.module.css';

export function TattooForm() {
    const initialState: ProtoTattooI = {
        image: '',
        categories: '',
        link: '',
        owner: '',
    };
    const { handleCreate } = useTattoo();

    const tattooServices = new TattooRepository();

    const [value, setValue] = useState(initialState);
    const [fileUrl, setFileUrl] = useState('');

    const handleForm = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setValue({ ...value, [element.name]: element.value });
    };

    const handleFile = async (ev: any) => {
        const file = ev.target.files[0];
        const storageRef = app.storage().ref();
        const filePath = storageRef.child(file.name);
        await filePath.put(file);
        const linkUrl = await filePath.getDownloadURL();
        setFileUrl(linkUrl);
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await tattooServices.create(value);
        const collectionRef = app.firestore().collection('files');
        await collectionRef.doc().set({ url: fileUrl });
        const newTattoo: ProtoTattooI = {
            ...value,
            image: fileUrl,
        };

        handleCreate(newTattoo);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className={style.h2} id="createTattoo">
                    Create tattoo
                </h2>
                <div className={style.container}>
                    <div className={style.container_file}>
                        <input
                            className={style.button_file}
                            type="file"
                            name="image"
                            onChange={handleFile}
                            required
                        />
                    </div>
                    <div>
                        <label className={style.categories}>CATEGORIES:</label>
                        <select
                            className={style.select}
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
                            autoComplete="off"
                            className={style.link}
                            type="url"
                            name="link"
                            value={value.link}
                            placeholder="Link web studio"
                            onInput={handleForm}
                        />
                    </div>
                    <button className={style.button} type="submit">
                        Send
                    </button>
                </div>
            </form>
        </>
    );
}
