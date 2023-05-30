import { useState } from 'react';
import Navbar from './Navbar';

export default function App({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
