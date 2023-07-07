/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.*',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                darkPrimary: '#455A64',
                lightPrimary: '#CFD8DC',
                accent: '#FF5722',
                darkAccent: '#B3340F',
                primaryText: '#212121',
                secondaryText: '#757575',
                divider: '#BDBDBD',
                // -----
                primary: '#1B2130',
                secondary: '#9EA8B1',
                // background: '#F2F9FF',
                background: '#edf1f5',
                mainBlue: '#0399FD',
                mainYellow: '#FEDA57',
                mainOrange: '#F08151'
            },
            fontFamily: {
                'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        },

    },
    darkMode: 'class',
    plugins: [require('tw-elements/dist/plugin.cjs')]
}
