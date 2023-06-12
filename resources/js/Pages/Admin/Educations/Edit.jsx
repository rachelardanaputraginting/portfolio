
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import EducationForm from '@/Components/EducationForm'
import PrimaryButton from '@/Components/PrimaryButton'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ education }) {
    const { data, setData } = useForm({
        name: education.name,
        department: education.department,
        year: education.year,
        location: education.location,
        status: education.status,
        description: education.description,
        picture: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(`/admin/educations/${education.slug}`, {
            _method: 'put',
            ...data
        }, {
            onSuccess: () => toast.success('Education has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Education : ${education.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <EducationForm {...{ data, setData }} />
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
