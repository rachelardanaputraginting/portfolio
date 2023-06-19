import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import Title from '@/Components/Title';
import Card from '@/Components/Card';
import TextInput from '@/Components/TextInput';

export default function Index({ products }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 4);
    return (
        <>
            <Head title="Products" />
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
                <div className='w-full flex justify-between items-center border-b mb-8 border-third gap-4'>
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>{products.length}</span>
                        {products.length > 4 ?
                            <Link href={route('skills.hardall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
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
                                <Card.Subtitle subtitle={product.description} />
                                <Card.Button href1={product.link} href2={``} />
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
