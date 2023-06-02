import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import Input from './Input'
import TextInput from './TextInput'

export default function ProductForm({ data, setData }) {
    const { errors, auth } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="picture" value="Picture" />
                <InputFile name='picture' id='picture' className="text-third" onChange={(e) => setData('picture', e.target.files[0])} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="title" value="Title" />
                <TextInput name='title' id='title' className="w-full" onChange={onChange} value={data.title} />
                {errors.title ? <Error className='' value={errors.title} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="link" value="URL" />
                <TextInput name='link' id='link' className="w-full" onChange={onChange} value={data.link} />
                {errors.link ? <Error className='' value={errors.link} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="teaser" value="Description" />
                <Textarea rows="6" name='teaser' id='teaser' onChange={onChange} value={data.teaser} />
                {errors.teaser ? <Error className='' value={errors.teaser} /> : null}
            </div>
        </>
    )
}
