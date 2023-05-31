import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';

export default function Index({ educations }) {
    return (
        <>
            <Head title="Educations" />

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
                <Title title="Educations" subtitle="The following is my educational history so far" />
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educations.map(education => (
                        <CardHorizontal src={education.picture}>
                            <CardHorizontal.Badge badge={education.department} className={'from-yellow-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                            <CardHorizontal.Title title={education.name} />
                            <CardHorizontal.Description description={education.description} />
                            <CardHorizontal.Footer year={education.year ? education.year : 'Learning'} location={education.location} position={education.status} />
                        </CardHorizontal >
                    ))}
                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
