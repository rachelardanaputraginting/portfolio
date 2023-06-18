import React from 'react';
import { useState } from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import Modal from '@/Components/Modal';

export default function Index(props) {
    const { data, setData } = useForm({
        title: '',
        slug: '',
        level: '',
        description: ''
    })

    let [isOpen, setIsOpen] = useState(false)

    const { data: skills, meta, links } = props.skills;

    const show = (skill, event) => {
        event.preventDefault();
        setData(skill)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
      };

    return (
        <>

            <Modal show={isOpen} onClose={setIsOpen}>
            <div className="mt-2 text-third flex w-1/4" dangerouslySetInnerHTML={{ __html: data.icon }} />
                <Modal.Title title={data.title} />
                <p className='px-3 text-sm py-1 bg-green-600 to-fifth flex items-center gap-2 max-w-max rounded m-4'>{data.level.name}</p>
                <Modal.Description description={data.description} />
                <button type="button" onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal>

            <Head title="Skills" />

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
                <Title title="Skills" subtitle="Here are some of my abilities in the field of Web Developer" />
            </Container>

        {skills.length > 4 ?
            <Container>
            <Link href={`#`} className='flex mb-2 justify-end text-sm items-center mr-1 gap-2 font-light text-secondary hover:text-red-500'>View all <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </Link >
            </Container>
                : null}

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map(skill => (
                        <CardHorizontal icon={skill.icon} key={skill.id}>
                            <CardHorizontal.Badge badge={skill.level.name} className="bg-red-500" />
                            <CardHorizontal.Title title={skill.title} />
                            <CardHorizontal.Description description={skill.description} />
                            <button type="button" onClick={(event) => show(skill, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-fifth'> Read More
                                        </button>
                        </CardHorizontal >
                    ))}
                </div>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
