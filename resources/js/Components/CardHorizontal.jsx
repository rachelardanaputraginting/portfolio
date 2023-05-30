import React from 'react'

function CardHorizontal({ icon, children }) {
    return (
        <a href="#" class="mt-32 flex flex-col items-center bg-gradient-to-r from-fifth rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div>{icon}</div>
            <div class="flex flex-col justify-between p-4 leading-normal">
                {children}
            </div>
        </a>
    )
}

function Title({ title }) {
    return (
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    )
}

function Description({ description }) {
    return (
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    )
}

CardHorizontal.Title = Title;
CardHorizontal.Description = Description;
export default CardHorizontal;
