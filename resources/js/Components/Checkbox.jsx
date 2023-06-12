import clsx from "clsx";

export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={clsx('rounded border-third text-third shadow-sm focus:ring-indigo-500 bg-fourth',
                className)

            }
        />
    );
}
