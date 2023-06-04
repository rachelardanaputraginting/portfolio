import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';

export default function Index({ skills }) {
    return (
        <>
            <Head title="Skills" />
            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/dashboard`}>Activitas</Navigation>
                    <Navigation href={`/admin/skills`}>Skills</Navigation>
                    <Navigation href={`/admin/products`}>Products</Navigation>
                    <Navigation href={`/admin/educations`}>Educations</Navigation>
                    <Navigation href={`/admin/experiences`}>Experiences</Navigation>
                    <Navigation href={`/admin/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Skills" subtitle="Here are some of my abilities in the field of Web Developer" />
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
