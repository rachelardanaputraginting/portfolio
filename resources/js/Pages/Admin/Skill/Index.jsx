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
import clsx from 'clsx';

export default function Index(props) {
    const { ask } = useSwal();

    const { data, setData } = useForm({
        title: '',
        slug: '',
        level: '',
        description: ''
    })

    let [isOpen, setIsOpen] = useState(false)

    const { data: skills, meta, links } = props.skills;

    const show = (skill) => {
        setData(skill)
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Modal show={isOpen} onClose={setIsOpen} >
            <div className="mt-2 text-third flex w-1/4" dangerouslySetInnerHTML={{ __html: data.icon }} />
                <Modal.Title title={data.title} />
                <p className='px-3 text-sm py-1 bg-green-600 to-fifth flex items-center gap-2 max-w-max rounded m-4'>{data.level}</p>
                <Modal.Description description={data.description + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum unde rem doloremque culpa placeat, non eum vitae maiores beatae dolorem dolor facilis. Rerum odio nostrum minus quae fugit dolores cupiditate maiores! Earum possimus libero maiores dolores ab ipsam. Ipsa molestiae perferendis incidunt debitis magni voluptatum id cupiditate excepturi ad, sapiente eligendi obcaecati vitae distinctio eaque, ipsam rerum, unde dolore quidem voluptates porro veniam. Cupiditate corrupti, ullam fugit officia hic deserunt similique modi nemo nobis, quidem eaque sed quia asperiores blanditiis doloribus quae voluptas illum fugiat. Blanditiis voluptatem incidunt vero sit quam non aliquam? A animi perferendis fugit saepe recusandae?'} />
                <button onClick={onClose} className='fixed right-5 top-5 border-none z-[9999] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </Modal >

            <Head title="Skills" />
            <Container>
                <div className="scrolling-wrapper flex flex-nowrap overflow-x-scroll gap-4">
                    <Navigation href={`/dashboard`}>Dashboard</Navigation>
                    <Navigation href={`/admin/skills`}>Skills</Navigation>
                    <Navigation href={`/admin/products`}>Products</Navigation>
                    <Navigation href={`/admin/educations`}>Educations</Navigation>
                    <Navigation href={`/admin/experiences`}>Experiences</Navigation>
                    <Navigation href={`/admin/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Admin - Skills" active={true} />
            </Container>

            <Container>
                <Link href={route('admin.skills.create')} className='rounded px-2 py-1.5 text-sm bg-gradient-to-r from-sky-600 to-fifth mb-4 flex items-center gap-1 my-12 max-w-max text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                    Add Skill</Link>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Icon</Table.Th>
                            <Table.Th>Title</Table.Th>
                            <Table.Th>Level</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {skills.length > 0 ? <>
                        {skills.map((skill, i) => (
                            <>
                                <tr key={skill.id}>
                                    <Table.Td>{i + meta.from}</Table.Td>
                                    <Table.Td><div className="mx-auto mt-2 text-third flex text-center w-16" dangerouslySetInnerHTML={{ __html: skill.icon }} /></Table.Td>
                                    <Table.Td>{skill.title}</Table.Td>
                                    <Table.Td>
                                        {skill.level.name}
                                    </Table.Td>
                                    <Table.Td>{skill.description}</Table.Td>
                                    <Table.Td className='flex gap-2'>
                                        <button onClick={() => show(skill)} className='transition duration-300 ease-linear px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-green-500 to-fifth'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        </button>
                                        <Link href={route('admin.skills.edit', skill.slug)} className='transition duration-300 ease-linear px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-yellow-500 to-fifth'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </Link>
                                        <Link onClick={() => {
                                            ask({
                                                url: route('admin.skills.destroy', skill.slug),
                                                method: "delete",
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
                                <td colSpan={6} className='text-center text-third text-sm'>Data is still empty at this time</td>
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
