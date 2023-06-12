import { React } from 'react';
import { Dialog } from '@headlessui/react'


function CartDialog({ children, isOpen = false, onClose = false }) {

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-[999]"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 overflow-y-auto ">
                {/* Container to center the panel */}
                <div className="flex min-h-auto items-center justify-center bg-primary">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="rounded min-h-full bg-fourth absolute  p-4 top-8 w-full md:w-3/4">
                        {children}
                    </Dialog.Panel>
                </div>
                <div className='h-4 w-full mb-32'></div>
            </div>
        </Dialog>
    )
}

function Title({ title }) {
    return (
        <div className='text-primary mt-12 text-left text-xl font-semibold'>{title}</div>
    )
}

function Divider() {
    return <div className='bg-gray-300 my-4 w-full h-px px-4' />
}

CartDialog.Title = Title;
CartDialog.Divider = Divider;
export default CartDialog;
