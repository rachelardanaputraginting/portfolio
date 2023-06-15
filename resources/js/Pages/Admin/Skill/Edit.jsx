
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import SkillForm from '@/Components/SkillForm'
import PrimaryButton from '@/Components/PrimaryButton'

export default function Edit({ skill }) {
    const { data, setData } = useForm({
        title: skill.title,
        icon: skill.icon,
        level: skill.level,
        description: skill.description,
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(`/admin/skills/${skill.slug}`, {
            _method: 'put',
            ...data,
            level : data.level.id
        }, {
            onSuccess: () => toast.success('Skill has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Skill : ${skill.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <SkillForm {...{ data, setData }} />
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
