import React from 'react'
import Container from './Container'

function Footer({ children }) {
    return (
        <footer className="bg-third shadow-lg shadow-secondary rounded-t-lg">
            <Container>
                <div className='w-full mx-auto text-center text-fourth mt-24 py-12'>
                    {children}
                </div>
            </Container>
        </footer>
    )
}

function Title({ title }) {
    return (
        <h4 className='text-sm text-fourth font-medium tracking-widest'>{title}</h4>
    )
}

function Subtitle({ subtitle }) {
    return (
        <p className='text-xs font-mono text-fourth w-2/3 mx-auto my-5'>{subtitle}</p>
    )
}

function Copyright({ copyright }) {
    return (
        <p className='text-xs -mb-5'>&copy; {copyright}</p>
    )
}

Footer.Title = Title;
Footer.Subtitle = Subtitle;
Footer.Copyright = Copyright;

export default Footer;
