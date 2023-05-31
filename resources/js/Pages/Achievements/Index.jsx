import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';

export default function Index({ achievements }) {
    console.log(achievements);
    return (
        <>
            <Head title="Achievement" />
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
                <Title title="Achievements" subtitle="Here are some of my achievements while pursuing the field of Web Developer" />
            </Container>

            <Container>
                {achievements.map(achievement => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <CardHorizontal rank={achievement.ranking}>
                            <CardHorizontal.Badge badge={`Juara ${achievement.ranking}`} className={'from-blue-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                            <CardHorizontal.Title title={achievement.title} />
                            <CardHorizontal.Description description={achievement.description} />
                            <CardHorizontal.Footer year={achievement.year} location={achievement.location} position={achievement.division} />
                        </CardHorizontal >
                    </div>
                ))}
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
