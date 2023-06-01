import React from 'react';
import { Head } from '@inertiajs/react';
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
                            <tr>
                                <Table.Td>{i + 1}</Table.Td>
                                <Table.Td><img src={product.picture} className='w-20 rounded' /></Table.Td>
                                <Table.Td>{product.title}</Table.Td>
                                <Table.Td>{product.title}</Table.Td>
                                <Table.Td>{product.link}</Table.Td>
                                <Table.Td>{product.link}</Table.Td>
                            </tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Container >
        </>
    );
}

Index.layout = page => <App children={page} />
