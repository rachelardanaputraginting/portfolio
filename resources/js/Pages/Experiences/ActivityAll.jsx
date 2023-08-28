import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';
import clsx from 'clsx';
import NavLink from '@/Components/NavLink';

export default function Index({ activity_experiences }) {

    const { get } = useForm()
    const [searchQueryActivity, setSearchQueryActivity] = useState('');

    const { data, setData } = useForm({
        name: '',
        position: '',
        entry_year: '',
        out_year: '',
        description: '',
        location: '',
        status: '',
        picture: '',
    })

    let [isOpen, setIsOpen] = useState(false)

    const show = (experience, event) => {
        event.preventDefault();
        setData(experience)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQueryActivity(e.target.value);
        get(`/experiences/activity_experiences?query=${e.target.value}`);
    };


    return (
        <>
            <Modal show={isOpen} onClose={setIsOpen}>
                <img src={data.picture} alt={data.picture} className='w-full rounded p-4 ' />
                <Modal.Title title={data.name} />
                <p className='px-3 text-sm py-1 bg-gradient-to-r from-green-500 to-fifth flex items-center gap-2 max-w-max rounded m-4'>{data.position}</p>
                <div className='flex gap-5 p-4'>
                    <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg> {data.entry_year} - {data.out_year}
                    </div>
                    <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                        {data.location}
                    </div>
                    <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-question" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                        <path d="M19 22v.01" />
                        <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                    </svg>
                        {data.status}
                    </div>
                </div>
                <Modal.Description description={data.description} />
                <button type="button" onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal>

            <Head title="Experiences - Activity Experiences" />
            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/`}>Services</Navigation>
                    <Navigation href={`/skills`}>Skills</Navigation>
                    <Navigation href={`/products`}>Products</Navigation>
                    <Navigation href={`/educations`}>Educations</Navigation>
                    <Navigation href={route('experiences.activityall')} className={clsx(usePage().url == usePage().url && 'from-red-500')}>Activity Experiences</Navigation>
                    <Navigation href={`/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            {/* Activity Experiences */}
            <Container>
                <Title title="Activity Experiences" subtitle="Here are some of my activity experiences in the Web Developer field" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <NavLink href={route('experiences.index')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                            Experiences</NavLink>
                    </div>

                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search work experiences"
                            value={searchQueryActivity}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>{activity_experiences.length}</span>
                        {activity_experiences.length > 4 ?
                            <Link href={route('experiences.activityall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {activity_experiences.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activity_experiences.map((experience, i) => (
                            <CardHorizontal src={experience.picture} key={i}>
                                <CardHorizontal.Badge badge={experience.position} className={'from-green-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                                <CardHorizontal.Title title={experience.name} />
                                <CardHorizontal.Description description={experience.description} />
                                <CardHorizontal.Footer year={`${experience.entry_year}  - ${experience.out_year}`} location={experience.location} position={experience.status} />

                                <button type="button" onClick={(event) => show(experience, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-secondary/50 font-medium text-sm'> Read More..
                                </button>
                            </CardHorizontal>
                        ))}
                    </div>
                </> : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container>
        </>
    );
}

Index.layout = page => <App children={page} />
