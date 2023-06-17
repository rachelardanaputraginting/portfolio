import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import AchievementForm from '@/Components/AchievementForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Container from '@/Components/Container';
import { toast } from 'react-hot-toast';

export default function Create(props) {
    const { post, data, setData } = useForm({
        title: '',
        ranking: '',
        year: '',
        location: '',
        division: '',
        description: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('admin.achievements.store'), {
            ...data,
            onSuccess: () => toast.success('Achievement has been added!')
        })
    }

    return (
        <>
            <Head title="Add Achievement" />
            <Container>
                <form onSubmit={onSubmit} className='mt-12'>
                    <AchievementForm {...{ data, setData }} />
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </>
    );
}

Create.layout = page => <App children={page} />
