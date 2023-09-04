const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            gridTemplateColumns: {
                '8' : 'repeat(8, 1fr)'
            },
            gridTemplateRows: {
                '8' : 'repeat(8, 5vw)'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                dance:[
                    "Dancing Script",
                ],
                cour:[
                    "Courgette",
                ],
                raleway:[
                    "Raleway",
                ],
                vibes:[
                    "Great Vibes",
                ],
                prata:[
                    "Prata",
                ]
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
