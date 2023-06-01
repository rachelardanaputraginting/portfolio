import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Container from '@/Components/Container';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Navigation from '@/Components/Navigation';
import CardHorizontal from '@/Components/CardHorizontal';
import Title from '@/Components/Title';
import Table from '@/Components/Table';

export default function Index({ products }) {
    return (
        <>
            <Head title="Products" />
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                    <Navigation href={`/dashboard`}>Index</Navigation>
                    <Navigation href={`/admin/skills`}>Skills</Navigation>
                    <Navigation href={`/admin/products`}>Products</Navigation>
                    <Navigation href={`/admin/educations`}>Educations</Navigation>
                    <Navigation href={`/admin/experiences`}>Experiences</Navigation>
                    <Navigation href={`/admin/achievements`}>Achievements</Navigation>
                </div>
            </Container>

            <Container>
                <Title title="Admin - Products" active={true} />
            </Container>

            <Container>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Picture</Table.Th>
                            <Table.Th>Title</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Link</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {products.map((product, i) => (
                            <>
                                <tr>
                                    <Table.Td>{i + 1}</Table.Td>
                                    <Table.Td><img src={product.picture} className='w-20 rounded' /></Table.Td>
                                    <Table.Td>{product.title}</Table.Td>
                                    <Table.Td>{product.description}</Table.Td>
                                    <Table.Td><a href={product.link} target='_blank' className='underline text-blue-500'>{product.link}</a></Table.Td>
                                    <Table.Td className='flex gap-2'>
                                        <Link href={route('products.show', product.slug)} className='px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-green-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        </Link>
                                        <Link href={route('products.edit', product.slug)} className='px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-yellow-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </Link>
                                        <Link onClick={() => {
                                            ask({
                                                url: route('products.destroy', product.slug),
                                                method: "delete",
                                                message: "You sure you want to delete it?"
                                            })
                                        }} className='hover:bg-rose-50 hover:text-rose-500 px-1.5 py-1.5 rounded hover:scale-125 bg-gradient-to-r from-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </Link>
                                    </Table.Td>
                                </tr >
                            </>
                        ))}
                    </Table.Tbody>
                </Table>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />