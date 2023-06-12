import React from 'react';

export default function Textarea({ ...props }) {
    return (
        <textarea
            className="border-third text-third focus:border-third focus:secondary rounded-md shadow-sm bg-fourth w-full"
            {...props}
        />
    );
}
