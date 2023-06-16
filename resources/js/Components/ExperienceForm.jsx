import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function ProductForm({ data, setData }) {
    const { errors } = usePage().props;

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
                <InputLabel htmlFor="name" value="Name" />
                <TextInput name='name' id='name' className="w-full" onChange={onChange} value={data.name} />
                {errors.name ? <Error className='' value={errors.name} /> : null}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="mb-6">
                    <InputLabel htmlFor="position" value="Position" />
                    <TextInput name='position' id='position' className="w-full" onChange={onChange} value={data.position} />
                    {errors.position ? <Error className='' value={errors.position} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="status" value="Status" />
                    <TextInput name='status' id='status' className="w-full" onChange={onChange} value={data.status} />
                    {errors.status ? <Error className='' value={errors.status} /> : null}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="mb-6">
                    <InputLabel htmlFor="entry_year" value="Entry Year" />
                    <TextInput name='entry_year' id='entry_year' className="w-full" onChange={onChange} value={data.entry_year} />
                    {errors.entry_year ? <Error className='' value={errors.entry_year} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="out_year" value="Out Year" />
                    <TextInput name='out_year' id='out_year' className="w-full" onChange={onChange} value={data.out_year} />
                    {errors.out_year ? <Error className='' value={errors.out_year} /> : null}
                </div>
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="location" value="Location" />
                <TextInput name='location' id='location' className="w-full" onChange={onChange} value={data.location} />
                {errors.location ? <Error className='' value={errors.location} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="description" value="Description" />
                <Textarea rows="6" name='description' id='description' onChange={onChange} value={data.description} />
                {errors.description ? <Error className='' value={errors.description} /> : null}
            </div>
        </>
    )
}
