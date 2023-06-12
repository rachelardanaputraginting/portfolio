import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import { Link } from '@inertiajs/react';
import Navbar from './Navbar';

export default function Guest({ children }) {
    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    );
}
