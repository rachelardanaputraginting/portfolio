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


        </div >
    )
}
