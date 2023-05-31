import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';

export default function Index(props) {
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CardHorizontal icon={<h1 className='text-9xl px-5 font-extrabold'>3</h1>}>
                        <CardHorizontal.Badge badge="Juara 3" className={'from-blue-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                        <CardHorizontal.Title title="Web Design Technology" />
                        <CardHorizontal.Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas, obcaecati accusantium dolorem quod delectus tempora veniam deserunt laudantium vitae quos aspernatur nemo tenetur!" />
                        <CardHorizontal.Footer year="2021" location="Banda Aceh" position="Juara 3" />
                    </CardHorizontal >
                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
