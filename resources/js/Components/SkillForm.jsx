import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
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
                <InputLabel htmlFor="title" value="Name" />
                <TextInput title='title' id='title' className="w-full" onChange={onChange} value={data.title} />
                {errors.title ? <Error className='' value={errors.title} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="level" value="Level" />
                <select name='level' className='border-third text-third focus:border-third focus:secondary rounded-md shadow-sm bg-fourth w-full'>
                    <option value="1" onChange={(e) => {
                        onChange(e)
                        setIsOpen(true)
                    }}>Beginner</option>
                    <option value="2" onChange={(e) => {
                        onChange(e)
                        setIsOpen(true)
                    }}>Intermediate</option>
                    <option value="3" onChange={(e) => {
                        onChange(e)
                        setIsOpen(true)
                    }}>Advanced</option>
                </select>
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
