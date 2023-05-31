import React from 'react';
import { Head } from '@inertiajs/react';
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
                <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
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
                {products.map(product => (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card src={product.picture}>
                            <Card.Title title={product.title} />
                            <Card.Subtitle subtitle={product.description} />
                            <Card.Button href1={product.link} href2={``} />
                        </Card>
                    </div>
                ))}
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
