import { Menu } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';

const Table = ({ children, className = '' }) => {
    return (
        <div className={clsx(className, 'flex flex-col')}>
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
};

const Thead = ({ className, children }) => {
    return (
        <thead className={className}>{children}</thead>
    );
};

const Tbody = ({ children }) => {
    return (
        <tbody className="divide-y divide-gray-200 bg-fourth">
            {children}
        </tbody>
    );
};

const Td = ({ className = '', children, ...props }) => {
    return (
        <td
            {...props}
            className={clsx(className, 'whitespace-nowrap px-6 py-4 text-third text-sm')}
        >
            {children}
        </td>
    );
};

const Th = ({ className, children }) => {
    return (
        <th
            scope="col"
            className={clsx(
                className,
                'whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-secondary'
            )}
        >
            {children}
        </th>
    );
};

const DropdownItem = ({ children, className = '', ...props }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    preserveScroll
                    className={clsx(
                        className,
                        active
                            ? 'bg-gray-50 text-black'
                            : 'bg-white text-black',
                        'block w-full py-2 px-4 text-left text-xs font-medium text-black hover:bg-blue-50 hover:text-blue-600'
                    )}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    );
};

const DropdownButton = ({ className, ...props }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    {...props}
                    className={clsx(
                        className,
                        active
                            ? 'bg-gray-50 text-black'
                            : 'bg-white text-black',
                        'block w-full py-2 px-4 text-left text-xs font-medium text-black hover:bg-blue-50 hover:text-blue-600'
                    )}
                >
                    {props.children}
                </button>
            )}
        </Menu.Item>
    );
};

const Dropdown = ({ className, children }) => {
    return (
        <div className='relative'>
            <Menu>
                <Menu.Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </Menu.Button>
                <Menu.Items className="absolute z-[9999] w-56 divide-y rounded-md border bg-white py-0.5 text-left shadow-sm">
                    {children}
                </Menu.Items>
            </Menu>
        </div>
    );
};

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Th = Th;
Table.Dropdown = Dropdown;
Table.DropdownItem = DropdownItem;
Table.DropdownButton = DropdownButton;

export default Table;