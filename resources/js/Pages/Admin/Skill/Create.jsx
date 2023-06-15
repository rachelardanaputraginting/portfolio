import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import SkillForm from '@/Components/SkillForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Container from '@/Components/Container';
import { toast } from 'react-hot-toast';

export default function Create(props) {
    const { post, data, setData } = useForm({
        title: '',
        level: '',
        icon: '',
        description: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('admin.skills.store'), {
            ...data,
            onSuccess: () => toast.success('Skill has been added!')
        })
    }

    return (
        <>
            <Head title="Add Skill" />
            <Container>
                <form onSubmit={onSubmit} className='mt-12'>
                    <SkillForm {...{ data, setData }} />
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </>
    );
}

Create.layout = page => <App children={page} />
