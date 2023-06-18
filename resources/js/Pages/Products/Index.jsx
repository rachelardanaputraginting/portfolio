import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import Title from '@/Components/Title';
import Card from '@/Components/Card';

export default function Index({ products }) {
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
                <div className='flex justify-between items-center'>
                    <p className='gap-1 my-3 text-third mr-1 flex justify-end hover:text-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                        {products.length}</p>
                    {products.length > 4 ?
                        <Link href={`#`} className='flex my-1 justify-end text-sm items-center mr-1 gap-2 font-light text-secondary hover:text-red-500'>View all <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                            < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        </Link >
                        : null}
                </div>
            </Container>

            <Container>
                {products.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map(product => (
                            <Card src={`storage/${product.picture}`}>
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
