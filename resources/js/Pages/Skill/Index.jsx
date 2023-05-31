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
                <Title title="Skills" subtitle="Here are some of my abilities in the field of Web Developer" />
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map(skill => (
                        <CardHorizontal className="w-full" icon={skill.icon}>
                            <CardHorizontal.Badge badge={skill.level} className="bg-red-500" />
                            <CardHorizontal.Title title={skill.title} />
                            <CardHorizontal.Description description={skill.description} />
                        </CardHorizontal >
                    ))}
                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
