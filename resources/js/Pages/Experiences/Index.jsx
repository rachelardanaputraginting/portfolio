import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import TextInput from '@/Components/TextInput';

export default function Index({ work_experiences, activity_experiences }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryActivity, setSearchQueryActivity] = useState('');

    const filteredWorkExperiences = work_experiences.filter(work_experience =>
        work_experience.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 2);

    const filteredActivityExperiences = activity_experiences.filter(activity_experience =>
        activity_experience.name.toLowerCase().includes(searchQueryActivity.toLowerCase())
    ).slice(0, 2);

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

    return (
        <>
            <Head title="Experiences - Work Experiences" />
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
                <Title title="Work Experiences" subtitle="Here are some of my work experiences in the Web Developer field" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search work experience"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>{work_experiences.length}</span>
                        {work_experiences.length > 4 ?
                            <Link href={route('experiences.workall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {filteredWorkExperiences.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredWorkExperiences.map((experience, i) => (
                            <CardHorizontal src={experience.picture} key={i}>
                                <CardHorizontal.Badge badge={experience.position} className={'from-green-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                                <CardHorizontal.Title title={experience.name} />
                                <CardHorizontal.Description description={experience.description} />
                                <CardHorizontal.Footer year={`${experience.entry_year}  - ${experience.out_year}`} location={experience.location} position={experience.position} />
                            </CardHorizontal>
                        ))}
                    </div>
                </> :
                    <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container>

            {/* Activity Experiences */}
            <Container>
                <Title title="Activity Experiences" subtitle="Here are some of my activity experiences in the Web Developer field" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search activity experience"
                            value={searchQueryActivity}
                            onChange={e => setSearchQueryActivity(e.target.value)}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>{activity_experiences.length}</span>
                        {activity_experiences.length > 4 ?
                            <Link href={route('experiences.workall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
                {filteredActivityExperiences.length > 0 ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredActivityExperiences.map((experience, i) => (
                            <CardHorizontal src={experience.picture} key={i}>
                                <CardHorizontal.Badge badge={experience.position} className={'from-green-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                                <CardHorizontal.Title title={experience.name} />
                                <CardHorizontal.Description description={experience.description} />
                                <CardHorizontal.Footer year={`${experience.entry_year}  - ${experience.out_year}`} location={experience.location} position={experience.position} />
                            </CardHorizontal>
                        ))}
                    </div>
                </> : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container>
        </>
    );
}

Index.layout = page => <App children={page} />
