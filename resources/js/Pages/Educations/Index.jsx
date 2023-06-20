import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';

export default function Index({ formal_educations, informal_educations }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryInformal, setSearchQueryInformal] = useState('');

    const filteredEducations = formal_educations.filter(formal_education =>
        formal_education.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 2);

    const filteredEducationsInformal = informal_educations.filter(informal_education =>
        informal_education.name.toLowerCase().includes(searchQueryInformal.toLowerCase())
    ).slice(0, 2);

    const { data, setData } = useForm({
        name: '',
        slug: '',
        department: '',
        year: '',
        location: '',
        status: '',
        description: '',
    })

    let [isOpen, setIsOpen] = useState(false)

    const show = (education, event) => {
        event.preventDefault();
        setData(education)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Head title="Educations" />

            <Modal show={isOpen} onClose={setIsOpen} >
                <img src={data.picture} alt={data.picture} className='w-1/4 p-4 ' />
                <Modal.Title title={data.title} />
                <p className='px-3 text-sm py-1 bg-gradient-to-r from-yellow-500 to-fifth flex items-center gap-2 max-w-max rounded m-4'>{data.department}</p>
                <div className='flex gap-5 p-4'>
                    <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg> {data.year}
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

                <Modal.Description description={data.description + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum unde rem doloremque culpa placeat, non eum vitae maiores beatae dolorem dolor facilis. Rerum odio nostrum minus quae fugit dolores cupiditate maiores! Earum possimus libero maiores dolores ab ipsam. Ipsa molestiae perferendis incidunt debitis magni voluptatum id cupiditate excepturi ad, sapiente eligendi obcaecati vitae distinctio eaque, ipsam rerum, unde dolore quidem voluptates porro veniam. Cupiditate corrupti, ullam fugit officia hic deserunt similique modi nemo nobis, quidem eaque sed quia asperiores blanditiis doloribus quae voluptas illum fugiat. Blanditiis voluptatem incidunt vero sit quam non aliquam? A animi perferendis fugit saepe recusandae?'} />
                <button onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal >

            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/`}>Activitas</Navigation>
                    <Navigation href={`/skills`}>Skills</Navigation>
                    <Navigation href={`/education`}>Products</Navigation>
                    <Navigation href={`/educations`}>Educations</Navigation>
                    <Navigation href={`/experiences`}>Experiences</Navigation>
                    <Navigation href={`/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Educations - Formal Educations" subtitle="The following is my educational history so far" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search formal education"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>{formal_educations.length}</span>
                        {formal_educations.length > 2 ?
                            <Link href={route('educations.formalall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
            {filteredEducations.length > 0 ? <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredEducations.map(education => (
                        <CardHorizontal src={`storage/${education.picture}`} key={education.id}>
                            <CardHorizontal.Badge badge={education.department} className={'from-yellow-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                            <CardHorizontal.Title title={education.name} />
                            <CardHorizontal.Description description={education.description} />
                            <CardHorizontal.Footer year={education.year} location={education.location} position={education.status} />
                            <button type="button" onClick={(event) => show(education, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-secondary/50 font-medium text-sm'> Read More..
                                </button>
                        </CardHorizontal >
                    ))}
                </div>
                </>
                    : <div className='text-sm text-center text-third font-light'>Data is still empty at this time</div>}
            </Container >

            <Container>
                <Title title="Educations - Informal Educations" subtitle="The following is my educational history so far" />
            </Container>

            <Container>
                <div className='w-full flex justify-between items-center border-b mb-4 border-third gap-4'>
                    <div className='w-full'>
                        <TextInput
                            type="search"
                            className="w-full"
                            placeholder="Search informal education"
                            value={searchQueryInformal}
                            onChange={e => setSearchQueryInformal(e.target.value)}
                        />
                    </div>
                    <div className="w-max flex justify-end gap-4 py-3">
                        <span className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>{informal_educations.length}</span>
                        {informal_educations.length > 2 ?
                            <Link href={route('educations.informalall')} className='rounded font-regular w-max py-2 px-3 text-center text-third bg-gradient-to-r from-fifth flex gap-1 items-center'>
                                All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                                    < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link >
                            : null}
                    </div>
                </div>
            </Container>

            <Container>
            {filteredEducationsInformal.length > 0 ? <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredEducationsInformal.map(education => (
                        <CardHorizontal src={`storage/${education.picture}`} key={education.id}>
                            <CardHorizontal.Badge badge={education.department} className={'from-yellow-500 px-2.5 py-1 bg-gradient-to-r text-base'} />
                            <CardHorizontal.Title title={education.name} />
                            <CardHorizontal.Description description={education.description} />
                            <CardHorizontal.Footer year={education.year} location={education.location} position={education.status} />
                            <button type="button" onClick={(event) => show(education, event)} className='flex justify-end ml-auto mr-4 items-center gap-2 w-max text-secondary hover:text-secondary/50 font-medium text-sm'> Read More..
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
