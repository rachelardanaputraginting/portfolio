import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import Title from '@/Components/Title';
import Card from '@/Components/Card';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';

export default function Index({ products }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3);

    const { data, setData } = useForm({
        title: '',
        slug: '',
        level: '',
        description: ''
    })

    let [isOpen, setIsOpen] = useState(false)

    const show = (product, event) => {
        event.preventDefault();
        setData(product)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Head title="Products" />

            <Modal show={isOpen} onClose={setIsOpen} >
                <img src={data.picture} alt="" className='w-full p-4' />
                <Modal.Title title={data.title} />
                <Link href={data.link} className='px-3 text-sm py-1 bg-gradient-to-r from-red-500 to-fifth flex items-center gap-2 max-w-max rounded m-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> Visit Product</Link>

                <Modal.Description description={data.description} />
                <button onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal >


            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/`}>Activitas</Navigation>
                    <Navigation href={`/skills`}>Skills</Navigation>
                    <Navigation href={`/products`}>Products</Navigation>
                    <Navigation href={`/educations`}>Educations</Navigation>
                    <Navigation href={`/experiences`}>Experiences</Navigation>
                    <Navigation href={`/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Products" subtitle="Here are some of the products I made while I was a Web Developer" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search products"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>{products.length}</span>
                        {products.length > 3 ?
                            <Link href={route('products.all')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {filteredProducts.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <Card src={product.picture} key={product.id}>
                                <Card.Title title={product.title} />
                                <Card.Subtitle subtitle={product.description}/>
                                <div className="flex gap-2 items-center">
                                    <a target='_blank' href={product.link} className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-gradient-to-r from-fifth rounded-lg hover:from-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                        </svg>
                                    </a>
                                    <Link onClick={(event) => show(product, event)} as="button" className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-gradient-to-r from-fifth rounded-lg hover:from-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </>
                    : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
