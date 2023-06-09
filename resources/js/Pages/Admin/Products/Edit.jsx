
import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import ProductForm from '@/Components/ProductForm'
import PrimaryButton from '@/Components/PrimaryButton'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ product }) {
    const { data, setData } = useForm({
        title: product.title,
        link: product.link,
        description: product.description,
        picture: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(`/admin/products/${product.slug}`, {
            _method: 'put',
            ...data
        }, {
            onSuccess: () => toast.success('Product has been updated!'),
        });
    }

    return (
        <div>
            <Head title={`Update Product : ${product.title}`} />
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
