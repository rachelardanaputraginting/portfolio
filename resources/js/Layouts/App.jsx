import { useState } from 'react';
import Navbar from './Navbar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Toaster } from 'react-hot-toast';

export default function App({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <div><Toaster
                toastOptions={{
                    style: {
                        border: '1px solid #382B49',
                        padding: '16px',
                        font: 'Work-Sans',
                        color: '#D7C5DF',
                        background: '#3B2D4E'
                    },
                }}
            /></div>
            <Navbar />
            <Header >
                <div className="flex items-start flex-wrap">
                    <div className="w-full sm:w-1/4">
                        <Header.Image />
                    </div>
                    <div className="w-full sm:w-3/4 text-center">
                        <Header.Title title="RACHEL ARDANA PUTRA GINTING" />
                        <Header.Subtitle subtitle="Youtuber | Web Developer" />
                        <div className='flex gap-5'>
                            <Header.Sosial icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth={0} fill="currentColor" />
                                </svg>
                            } text="Rachel Ardana Putra Ginting"></Header.Sosial>
                            <Header.Sosial icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-filled" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth={0} fill="currentColor" />
                                </svg>
                            } text="Aceh, Indonesia"></Header.Sosial>
                        </div>
                        <Header.Subtitle subtitle="About Me" />
                        <Header.Description description="Menemukan kesenangan didunia Programming sejak SMK, selain belajar saya juga senang mengajarkan hal-hal yang sudah pernah saya pelajari melakui Article yang saya tulis dan Video Tutorial yang saya publish di Youtube. Ketertarikan belajar Programming membawa saya menjadi yang sekarang ini dan membuat penasaraan dengan hal baru dan terbiasa menghadapi suatu masalah" />

                    </div>
                </div>
            </Header>
            <main>{children}</main>
            <Footer>
                <Footer.Title title="Rachel Ardana Putra Ginting" />
                <Footer.Subtitle subtitle="The future is for those who believe in their beautiful dreams" />
                <Footer.Copyright copyright={'Copyright 2023. All reserved by rajartan_'} />
            </Footer>
        </>
    );
}
