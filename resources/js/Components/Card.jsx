import { Link } from '@inertiajs/react'
import React from 'react'

function Card({ children, src }) {
    return (
        <div>
            <div className="h-64 from-fifth rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
                <Link href="#" className='bg-black w-full'>
                    <img className="rounded-lg h-full w-full" src={src} />
                </Link>
                <div className="p-5 absolute top-0 hover:top-0 pt-64 hover:pt-28 transition-all ease-in duration-500 right-0 left-0 -bottom-40 hover:bg-gradient-to-t from fourth via-fourth to-transparent">
                    {children}
                </div>
            </div>
        </div >
    )
}


function Title({ title, href }) {
    return (
        <Link href={href}>
            <h5 className="mb-2 text-secondary text-2xl font-semibold tracking-tight dark:text-white">{title}</h5>
        </Link>
    )
}

function Subtitle({ subtitle }) {
    return (
        <p className="mb-3 text-third font-light text-sm dark:text-gray-400 line-clamp-2">{subtitle}.</p>
    )
}

function Button({ href1, href2 }) {
    return (
        <div className='flex gap-3'>
            <Link href={href1} className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-gradient-to-r from-fifth rounded-lg hover:from-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>

            </Link>
            <Link href={href2} className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-gradient-to-r from-fifth rounded-lg hover:from-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </Link>
        </div>
    )
}

Card.Title = Title;
Card.Subtitle = Subtitle;
export default Card;
