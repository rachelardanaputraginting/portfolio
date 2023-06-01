import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import React from 'react'

function Navigation({ children, className, href, active, ...props }) {
    return (
        <div className='mt-0 md:mt-12'>
            <Link
                {...props}
                href={href}
                className={clsx(usePage().url == href && 'from-red-500', className, 'rounded font-medium w-40 py-2.5 text-center text-third bg-gradient-to-r from-fifth block')}> {children}</Link>
        </div >
    )
}

export default Navigation;
