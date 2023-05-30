import React from 'react'
import Container from './Container';
import Rachel from '@/Images/Rachel.png';

function Header({ children }) {
    return (
        <div className='bg-primary shadow w-full text-white py-12'>
            <Container>
                {children}
            </Container>
        </div>
    )
}

function Image() {
    return (
        <img src={Rachel} width={200} className='mx-auto ' />
    )
}

function Title({ title }) {
    return (
        <div className='text-4xl font-semibold flex justify-start'>{title}</div>
    )
}

function Subtitle({ subtitle }) {
    return (
        <div className='text-xl'>{subtitle}</div>
    )
}


function Sosial({ icon, text }) {
    return (
        <div className='flex gap-1 mt-8 mb-12'>
            <div className='text-third'>{icon}</div>
            <div>{text}</div>
        </div>
    )
}

function Description({ description }) {
    return (
        <div className='text-sm font-light text-third'>{description}</div>
    )
}

Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Image = Image;
Header.Sosial = Sosial;
Header.Description = Description;

export default Header;
