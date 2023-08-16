import React from 'react';
import { useState } from 'react'
import { Head, Link, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Navigation from '@/Components/Navigation';
import Title from '@/Components/Title';
import Table from '@/Components/Table';
import Pagination from '@/Components/Pagination';
import useSwal from '@/Hooks/useSwal';
import Modal from '@/Components/Modal';

export default function Index(props) {
    const { ask } = useSwal();

    const { data, setData } = useForm({
        title: '',
        slug: '',
        description: '',
        link: ''
    })

    let [isOpen, setIsOpen] = useState(false)

    const { data: educations, meta, links } = props.educations;

    const show = (education) => {
        setData(education)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <>
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

                <Modal.Description description={data.description} />
                <button onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal >

            <Head title="Education" />
            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/dashboard`}>Index</Navigation>
                    <Navigation href={`/admin/skills`}>Skills</Navigation>
                    <Navigation href={`/admin/products`}>Products</Navigation>
                    <Navigation href={`/admin/educations`}>Educations</Navigation>
                    <Navigation href={`/admin/experiences`}>Experiences</Navigation>
                    <Navigation href={`/admin/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Admin - Education" active={true} />
            </Container>

            <Container>
                <Link href={route('admin.educations.create')} className='rounded px-2 py-1.5 text-sm bg-gradient-to-r from-sky-600 to-fifth mb-4 flex items-center gap-1 my-12 max-w-max text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                    Add Education</Link>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Department</Table.Th>
                            <Table.Th>Year</Table.Th>
                            <Table.Th>Location</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {educations.length > 0 ? <>
                            {educations.map((education, i) => (
                                <>
                                    <tr key={education.id}>
                                        <Table.Td>{i + meta.from}</Table.Td>
                                        <Table.Td><img src={education.picture} className='w-20 rounded' alt={education.picture} /></Table.Td>
                                        <Table.Td>{education.name}</Table.Td>
                                        <Table.Td>{education.department}</Table.Td>
                                        <Table.Td>{education.year ? education.year : "Active"}</Table.Td>
                                        <Table.Td>{education.location}</Table.Td>
                                        <Table.Td className='flex gap-2'>
                                            <button onClick={() => show(education)} className='transition duration-300 ease-linear px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-green-500 to-fifth'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            </button>
                                            <Link href={route('admin.educations.edit', education.slug)} className='transition duration-300 ease-linear px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-yellow-500 to-fifth'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </Link>
                                            <Link onClick={() => {
                                                ask({
                                                    url: route('admin.educations.destroy', education.slug),
                                                    method: "delete",
                                                    methodata: "Education",
                                                    message: "You sure you want to delete it?"
                                                })
                                            }} className='transition duration-300 ease-linear px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-red-500 to-fifth'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </Link>
                                        </Table.Td>
                                    </tr >

                                </>
                            ))}
                        </> :
                            <tr>
                                <td colSpan={7} className='text-center text-third text-sm'>Data is still empty at this time</td>
                            </tr>
                        }
                    </Table.Tbody >
                </Table>
                <Pagination meta={meta} links={links} />
            </Container >
        </>


    );
}

Index.layout = page => <App children={page} />
