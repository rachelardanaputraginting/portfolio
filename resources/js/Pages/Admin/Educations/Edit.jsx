
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import ProductForm from '@/Components/ProductForm'
import PrimaryButton from '@/Components/PrimaryButton'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ product }) {
    const { data, setData, put } = useForm({
        title: product.title,
        link: product.link,
        description: product.description,
        picture: '',
    })


    const onSubmit = (e) => {
        e.preventDefault();
        put(route('admin.products.update', product.slug), {
            ...data,
            onSuccess: () => toast.success('Product has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Article ${product.title}`} />
            <Container>
                <form onSubmit={onSubmit}>
                    <ProductForm {...{ data, setData }} />
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
