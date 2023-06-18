
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import AchievementForm from '@/Components/AchievementForm'
import PrimaryButton from '@/Components/PrimaryButton'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ achievement }) {
    const { data, setData } = useForm({
        title: achievement.title,
        ranking: achievement.ranking,
        year: achievement.year,
        location: achievement.location,
        division: achievement.division,
        description: achievement.description
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(`/admin/achievements/${achievement.slug}`, {
            _method: 'put',
            ...data
        }, {
            onSuccess: () => toast.success('Achievement has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Achievement : ${achievement.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <AchievementForm {...{ data, setData }} />
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
