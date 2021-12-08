module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                primary: {
                    DEFAULT: '#34dba1',
                    light: '#1c212d',
                    dark: '#161a24',
                    thin: '#34dba11a',
                    transparent: '#636d7b'
                },

                secondary: {
                    DEFAULT: '#181d28',
                    light: '#f8f8f9',
                    thin: {
                        DEFAULT: '#ffffff',
                        transparent: '#ffffff75'
                    }
                },

                card: {
                    shadow: '#020c1bb3'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
