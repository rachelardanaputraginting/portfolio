import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function Select({ data, value, onChange, placeholder = 'Select one' }) {
    const [isOpen, setIsOpen] = useState(false);

    var level = '';
    if (value == 1) {
        level = "Beginner"
    }else if (value == 2) {
        level = "Intermediate"
    } else if(value == 3){
        level = "Advanced"
    }else {
        level = "Select one"
    }

    return (
        <Listbox
            as="div"
            className="relative rounded-xl"
            value={value}
            onChange={(e) => {
                onChange(e)
                setIsOpen(true)
            }}
            open={isOpen}
        >
            <Listbox.Button className="flex h-11 items-center justify-between gap-x-2 rounded-lg border px-3 focus:outline-none">
                <span className="capitalize line-clamp-1 text-third">{level || placeholder}</span>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Listbox.Options className="z-50 absolute right-0 mt-1 max-h-[10rem] w-full overflow-y-auto rounded-lg border bg-primary py-1 shadow-sm">
                    {data.map((item) => (
                        <Listbox.Option key={item.id} value={item}>
                            {({ selected, active }) => (
                                <div
                                    className={clsx(
                                        'flex cursor-pointer text-third text-sm items-center py-1.5 px-4',
                                        active && 'bg-gray-100',
                                        selected &&
                                        'bg-primary font-semibold text-third hover:bg-primary-100'
                                    )}
                                >
                                    <span className="capitalize line-clamp-1">{item.name}</span>
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}
