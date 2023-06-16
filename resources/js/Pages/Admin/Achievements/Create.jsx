import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import ExperienceForm from '@/Components/ExperienceForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Container from '@/Components/Container';
import { toast } from 'react-hot-toast';

export default function Create(props) {
    const { post, data, setData } = useForm({
        name: '',
        position: '',
        entry_year: '',
        out_year: '',
        location: '',
        status: '',
        description: '',
        picture: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('admin.experiences.store'), {
            ...data,
            onSuccess: () => toast.success('Experience has been added!')
        })
    }

    return (
        <>
            <Head title="Add Experience" />
            <Container>
                <form onSubmit={onSubmit} className='mt-12'>
                    <ExperienceForm {...{ data, setData }} />
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </>
    );
}

Create.layout = page => <App children={page} />
