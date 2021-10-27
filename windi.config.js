import { defineConfig } from 'windicss/helpers'
const { transform } = require('windicss/helpers')

export default defineConfig({
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px', 
            },
            fontFamily: {
                "sans": "Montserrat",
            }
        }
    },
    plugins: [
        transform('daisyui'),
    ],
})