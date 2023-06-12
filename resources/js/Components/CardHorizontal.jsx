import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import React from 'react'

function CardHorizontal({ icon, children, className, src, rank }) {
    return (
        <Link href="#" className="w-full flex items-start bg-gradient-to-r from-fifth rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="w-1/3">
                <div className={clsx('mx-auto mt-2 text-third flex text-center', className)} dangerouslySetInnerHTML={{ __html: icon }} />
                <h1 className='text-[130px] font-bold font-mono text-center mx-auto flex text-third'>{rank}</h1>
                <img src={src} width='120' className='mt-4 mx-auto flex text-center' />
            </div>
            <div className="w-2/3 flex flex-col justify-between py-4 pl-4 leading-normal">
                {children}
            </div>
        </Link>
    )
}

function Title({ title }) {
    return (
        <h5 className="mb-2 text-secondary text-2xl font-semibold tracking-tight dark:text-white">{title}</h5>
    )
}

function Badge({ badge, className }) {
    return (
        <span className={clsx('px-1 py-0.3 text-[12px] rounded text-third d-flex w-max', className)}>{badge}</span>
    )
}

function Description({ description }) {
    return (
        <p className="mb-3 text-third font-light text-sm dark:text-gray-400 line-clamp-3">{description}</p>
    )
}

function Footer({ year, location, position }) {
    return (
        <div className='flex gap-5'>
            <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg> {year}
            </div>
            <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
                {location}
            </div>
            <div className='text-xs flex gap-1 mt-3 text-third'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-question" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                <path d="M19 22v.01" />
                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
                {position}
            </div>
        </div>
    )
}

CardHorizontal.Title = Title;
CardHorizontal.Badge = Badge;
CardHorizontal.Description = Description;
CardHorizontal.Footer = Footer;
export default CardHorizontal;
