import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import EducationForm from '@/Components/EducationForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Container from '@/Components/Container';
import { toast } from 'react-hot-toast';

export default function Create(props) {
    const { post, data, setData } = useForm({
        name: '',
        department: '',
        year: '',
        location: '',
        status: '',
        description: '',
        picture: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('admin.educations.store'), {
            ...data,
            onSuccess: () => toast.success('Education has been added!')
        })
    }

    return (
        <>
            <Head title="Add Education" />
            <Container>
                <form onSubmit={onSubmit} className='mt-12'>
                    <EducationForm {...{ data, setData }} />
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </>
    );
}

Create.layout = page => <App children={page} />
