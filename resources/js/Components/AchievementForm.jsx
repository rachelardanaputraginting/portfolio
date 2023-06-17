import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'

export default function AchievementForm({ data, setData }) {
    const { errors } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="title" value="Title" />
                <TextInput name='title' id='title' className="w-full" onChange={onChange} value={data.title} />
                {errors.title ? <Error className='' value={errors.title} /> : null}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="mb-6">
                    <InputLabel htmlFor="ranking" value="Ranking" />
                    <TextInput name='ranking' id='ranking' className="w-full" onChange={onChange} value={data.ranking} />
                    {errors.ranking ? <Error className='' value={errors.ranking} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="year" value="Year" />
                    <TextInput name='year' id='year' className="w-full" onChange={onChange} value={data.year} />
                    {errors.year ? <Error className='' value={errors.year} /> : null}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="mb-6">
                    <InputLabel htmlFor="location" value="Location" />
                    <TextInput name='location' id='location' className="w-full" onChange={onChange} value={data.location} />
                    {errors.location ? <Error className='' value={errors.location} /> : null}
                </div>
                <div className="mb-6">
                    <InputLabel htmlFor="division" value="Division" />
                    <TextInput name='division' id='division' className="w-full" onChange={onChange} value={data.division} />
                    {errors.division ? <Error className='' value={errors.division} /> : null}
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
