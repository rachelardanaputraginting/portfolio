import clsx from 'clsx'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={clsx('max-w-7xl mx-auto sm:px-6 lg:px-8 px-4', className)}>
            {children}
        </div>
    )
}
