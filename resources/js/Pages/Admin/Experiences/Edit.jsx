
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import ExperienceForm from '@/Components/ExperienceForm'
import PrimaryButton from '@/Components/PrimaryButton'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ experience }) {
    const { data, setData } = useForm({
        name: experience.name,
        position: experience.position,
        entry_year: experience.entry_year,
        out_year: experience.out_year,
        location: experience.location,
        status: experience.status,
        description: experience.description,
        picture: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(`/admin/experiences/${experience.slug}`, {
            _method: 'put',
            ...data
        }, {
            onSuccess: () => toast.success('Experience has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Experience : ${experience.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <ExperienceForm {...{ data, setData }} />
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
