import { useState } from 'react';
import Navbar from './Navbar';
import Footer from '@/Components/Footer';

export default function App({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer>
                <Footer.Title title="Rachel Ardana Putra Ginting" />
                <Footer.Subtitle subtitle="The future is for those who believe in their beautiful dreams" />
                <Footer.Copyright copyright={'Copyright 2023. All reserved by rajartan_'} />
            </Footer>
        </>
    );
}
