/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                mainBlue: '#3d00e0',
                primary: '#607D8B',
                darkPrimary: '#455A64',
                lightPrimary: '#CFD8DC',
                accent: '#FF5722',
                primaryText: '#212121',
                secondaryText: '#757575',
                divider: '#BDBDBD'
            }
        },
    },
    plugins: [
      require('flowbite/plugin')
    ],
}
