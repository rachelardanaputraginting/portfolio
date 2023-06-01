import { Link, usePage } from '@inertiajs/react'
import clsx from 'clsx'
import React from 'react'

export default function Title({ title, subtitle, href, active = false, ...props }) {
    return (
        <div className='mt-16 mb-8 ml-1 font-medium text-2xl flex justify-between items-center'>
            <div>
                <h3 className='text-secondary'>{title}</h3>
                <p className='text-sm font-light text-third'>{subtitle}</p>
            </div>
            <Link {...props} href={href} className={clsx(active == true && 'hidden', 'flex text-sm items-center mr-1 gap-2 font-light text-secondary hover:text-red-500')}>View all <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-4 h-4">
                < path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </Link >

        </div >
    )
}
