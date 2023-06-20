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
        </div>
    )
}


function Title({ title, href }) {
    return (
        <Link href={href}>
            <h5 className="mb-2 text-secondary text-2xl font-semibold tracking-tight dark:text-white line-clamp-1">{title}</h5>
        </Link>
    )
}

function Subtitle({ subtitle }) {
    return (
        <p className="mb-3 text-third font-light text-sm dark:text-gray-400 line-clamp-2">{subtitle}.</p>
    )
}

Card.Title = Title;
Card.Subtitle = Subtitle;
export default Card;
