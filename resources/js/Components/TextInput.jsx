import clsx from 'clsx';
import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={clsx('border-third text-third focus:border-third focus:secondary rounded-md shadow-sm bg-fourth', className)
                }
                ref={input}
            />
        </div>
    );
});
