import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import ProductForm from '@/Components/ProductForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Container from '@/Components/Container';
import { toast } from 'react-hot-toast';

export default function Create(props) {
    const { post, data, setData } = useForm({
        title: '',
        link: '',
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
                    <ProductForm {...{ data, setData }} />
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </>
    );
}

Create.layout = page => <App children={page} />
