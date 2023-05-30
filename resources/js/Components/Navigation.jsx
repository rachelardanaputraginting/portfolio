import React from 'react'

function Navigation({ children, href }) {
    return (
        <div className='mt-12'>
            <a href={href} className='rounded font-medium w-full py-2.5 text-center text-third bg-gradient-to-r from-fifth block' as="button">{children}</a>
        </div>
    )
}

export default Navigation;
