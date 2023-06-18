import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import { usePage } from '@inertiajs/react'
import TextInput from './TextInput'
import Select from './Select'

export default function SkillForm({ data, setData }) {
    const { errors } = usePage().props;

    const levels = [
        {
            id: 1,
            name: "Beginner"

        },
        {
            id: 2,
            name: "Intermediate"
        },
        {
            id: 3,
            name: "Advanced"
        }
    ];

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
            <div className="mb-6">
                <InputLabel htmlFor="level" value="Level" />
                <Select value={data.level} data={levels} onChange={(e) => setData('level', e)} />
                    {errors.level ? <Error className='' value={errors.level} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="icon" value="Icon" />
                <TextInput name='icon' id='icon' className="w-full" onChange={onChange} value={data.icon} />
                {errors.icon ? <Error className='' value={errors.icon} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="description" value="Description" />
                <Textarea rows="6" name='description' id='description' onChange={onChange} value={data.description} />
                {errors.description ? <Error className='' value={errors.description} /> : null}
            </div>
        </>
    )
}
