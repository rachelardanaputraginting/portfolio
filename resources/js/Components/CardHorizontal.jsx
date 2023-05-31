import clsx from 'clsx'
import React from 'react'

function CardHorizontal({ icon, children }) {
    return (
        <a href="#" className="w-full flex flex-col items-center bg-gradient-to-r from-fifth rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className='mx-auto mt-2 px-4 text-third'>{icon}</div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                {children}
            </div>
        </a>
    )
}

function Title({ title }) {
    return (
        <h5 className="mb-2 text-secondary text-2xl font-semibold tracking-tight dark:text-white">{title}</h5>
    )
}

function Badge({ badge, className }) {
    return (
        <span className={clsx('px-1 py-0.3 text-[12px] rounded text-third  d-flex w-max', className)}>{badge}</span>
    )
}

function Description({ description }) {
    return (
        <p className="mb-3 text-third font-light text-sm dark:text-gray-400">{description}</p>
    )
}

CardHorizontal.Title = Title;
CardHorizontal.Badge = Badge;
CardHorizontal.Description = Description;
export default CardHorizontal;
