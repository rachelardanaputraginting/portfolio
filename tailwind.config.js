const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#382B49',
                secondary: '#D7C5DF',
                third: '#D7C5DF',
                fourth: '#3B2D4E',
                fifth: '#7B4F8E',
                sixth: '#dc2626',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
