import { Link } from '@inertiajs/react'
import React from 'react'

function Card({ children, src }) {
    return (
        <>
            <div className='w-full flex justify-between items-center border-b mb-8 border-third gap-4'>
                <div className='w-full'>
                    <TextInput
                        type="search"
                        className="w-full"
                        placeholder="Search hard skills"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

            </div>
        </>
    )
}
