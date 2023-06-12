import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';

export default function Index({ experiences }) {
    return (
        <>
            <Head title="Experiences" />
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
                <Title title="Experiences" subtitle="Here are some of my experiences in the Web Developer field" />
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map(experience => (
                        <CardHorizontal src={experience.picture}>
                            <CardHorizontal.Badge badge={experience.position} className={'from-green-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                            <CardHorizontal.Title title={experience.name} />
                            <CardHorizontal.Description description={experience.description} />
                            <CardHorizontal.Footer year={`${experience.entry_year}  - ${experience.out_year}`} location={experience.location} position={experience.position} />
                        </CardHorizontal >
                    ))}
                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
