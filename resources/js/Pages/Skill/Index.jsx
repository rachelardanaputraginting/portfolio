import React from 'react';
import { useState } from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import Error from '@/Components/Error';

export default function Index({ skills }) {
    const limitedSkills = skills.slice(0, 4);

    const { data, setData, errors } = useForm({
        title: '',
        slug: '',
        level: '',
        description: ''
    })

    let [isOpen, setIsOpen] = useState(false)

    // const { data: skills, meta, links } = props.skills;

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
                <Title title="Skills - Hard Skills" subtitle="Here are some of my abilities in the field of Web Developer" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-8 border-third gap-4'>
                    <form action="" className='w-full'>
                        <TextInput type="search" className="w-full" placeholder="Search skills" />
                    </form>
                    <div className="w-max flex justify-end gap-4 py-3">

                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>{skills.length}</span>
                        {skills.length > 4 ?
                            <Link href={`#`} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {limitedSkills.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {limitedSkills.map(skill => (
                            <CardHorizontal icon={skill.icon} key={skill.id}>
                                <CardHorizontal.Badge badge={skill.level.name} className={`${skill.level.color}`} />
                                <CardHorizontal.Title title={skill.title} />
                                <CardHorizontal.Description description={skill.description} />
                                <button type="button" onClick={(event) => show(skill, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-secondary/50 font-medium text-sm'> Read More..
                                </button>
                            </CardHorizontal >
                        ))}
                    </div>
                </>
                    : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container >

            <Container>
                <Title title="Skills - Soft Skills" subtitle="Here are some of my abilities in the field of Web Developer" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-8 border-third gap-4'>
                    <form action="" className='w-full'>
                        <TextInput type="search" className="w-full" placeholder="Search skills" />
                    </form>
                    <div className="w-max flex justify-end gap-4 py-3">

                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>{skills.length}</span>
                        {skills.length > 4 ?
                            <Link href={`#`} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {limitedSkills.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {limitedSkills.map(skill => (
                            <CardHorizontal icon={skill.icon} key={skill.id}>
                                <CardHorizontal.Badge badge={skill.level.name} className={`${skill.level.color}`} />
                                <CardHorizontal.Title title={skill.title} />
                                <CardHorizontal.Description description={skill.description} />
                                <button type="button" onClick={(event) => show(skill, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-secondary/50 font-medium text-sm'> Read More..
                                </button>
                            </CardHorizontal >
                        ))}
                    </div>
                </>
                    : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
