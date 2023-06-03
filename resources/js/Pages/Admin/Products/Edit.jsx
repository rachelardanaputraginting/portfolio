import Button from '@/Components/Button'
import Container from '@/Components/Container'
import Header from '@/Components/Header'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import ArticleForm from '@/Components/ArticleForm'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ product, statuses }) {
    const { data, setData } = useForm({
        title: product.title,
        link: product.link,
        description: product.description,
        picture: '',
    })


    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.update', product.slug), {
            ...data,
            _method: "PUT",
            category_id: data.category_id.id,
            status: data.status.id,
            tags: data.tags.map(t => t.id)
        })
    }

    return (
        <div>
            <Head title={`Update Article ${product.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <ArticleForm {...{ data, setData }} />
                    <Button>Update</Button>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
