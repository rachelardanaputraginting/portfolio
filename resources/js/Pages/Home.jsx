import React from 'react';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import Title from '@/Components/Title';
import Card from '@/Components/Card';

export default function Home(props) {

    let web_dev = "https://pngtree.com/freepng/modern-flat-design-concept-of-web-development-with-characters-on-screen-programming-and-coding-can-use-for--business-mobil-app-landing-page-website-template-flat-vector-illustration_5332909.html";

    return (
        <>
            <Head title="Home" />
            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/`}>Services</Navigation>
                    <Navigation href={`/skills`}>Skills</Navigation>
                    <Navigation href={`/products`}>Products</Navigation>
                    <Navigation href={`/educations`}>Educations</Navigation>
                    <Navigation href={`/experiences`}>Experiences</Navigation>
                    <Navigation href={`/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Services" subtitle="Here are some of my services field of Web Developers and Mobile Developer" />
            </Container>

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Card src="http://127.0.0.1:8000/storage/images/services/web-developer.png">
                        <Card.Title title={`Web Developer`} />
                        <Card.Subtitle subtitle={`lorem ipsum dolor sit amet, consectetur`} />
                        <div className="flex gap-2 items-center">
                        </div>
                    </Card>
                    <Card src="http://127.0.0.1:8000/storage/images/services/web-dev.png">
                        <Card.Title title={`Web Development`} />
                        <Card.Subtitle subtitle={`lorem ipsum dolor sit amet, consectetur`} />
                        <div className="flex gap-2 items-center">
                        </div>
                    </Card>
                    <Card src="http://127.0.0.1:8000/storage/images/services/mobile-dev.png">
                        <Card.Title title={`Mobile Developer`} />
                        <Card.Subtitle subtitle={`lorem ipsum dolor sit amet, consectetur`} />
                        <div className="flex gap-2 items-center">
                        </div>
                    </Card>
                </div>
            </Container>
        </>
    );
}

Home.layout = page => <App children={page} />
