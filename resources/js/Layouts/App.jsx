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
                <Footer.Subtitle subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas, obcaecati accusantium dolorem quod delectus tempora veniam deserunt laudantium vitae quos aspernatur nemo tenetur! Necessitatibus dicta tempore eum ut reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas." />
                <Footer.Copyright copyright={'Copyright 2023. All reserved by rajartan_'} />
            </Footer>
        </>
    );
}
