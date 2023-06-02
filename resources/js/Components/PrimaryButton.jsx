export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-500 to-fourth rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 hover:bg-gradien-to-r hover:from-sky-500 hover:to-fourth transition ease-in-out duration-150 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
