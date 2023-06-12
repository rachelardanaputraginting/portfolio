import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function Modal({ children, show = false, maxWidth = '4xl', closeable = true, onClose = () => { } }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
    }[maxWidth];

    return (
        <Transition show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                className="fixed min-h-screen inset-0 flex overflow-y-auto top-0 right-0 left-0 bottom-0 px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-slate-200/80" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    {/* Full-screen scrollable container */}
                    <div className="fixed inset-0 overflow-y-hidden">
                        {/* Container to center the panel */}
                        <div className="flex min-h-auto items-center justify-center bg-gray-200/80">
                            <Dialog.Panel
                                className={`absolute bg-fourth text-third top-8 bottom-8 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto pb-12 ${maxWidthClass} overflow-y-scroll scrolling-modal`}
                            >
                                {children}
                            </Dialog.Panel>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition >
    );
}

function Title({ title }) {
    return (
        <div className='text-secondary mt-2 px-4 text-center sm:text-left text-2xl font-semibold'>{title}</div>
    )
}

function Description({ description }) {
    return (
        <div className='text-secondary mt-2 px-4 text-left text-sm font-light leading-relaxed'>{description}</div>
    )
}

function Divider() {
    return <div className='bg-gray-300 my-4 w-full h-px px-4' />
}

Modal.Title = Title;
Modal.Divider = Divider;
Modal.Description = Description;

export default Modal;
