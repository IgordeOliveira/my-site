import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "gray.background",
                color: "#fff"
            },
        }
    },
    colors: {
        gray: {
            background: "#1A1A1D",
            50: '#edf6fc',
            100: '#d2dbe0',
            200: '#b7c1c7',
            300: '#9ca7b0',
            400: '#808c98',
            500: '#67727f',
            600: '#4f5963',
            700: '#383f48',
            800: '#20272d',
            900: '#011114',
        },
        purple: {
            50: '#f2e4ff',
            100: '#d2b2ff',
            200: '#b380ff',
            300: '#954dfe',
            400: '#771cfd',
            500: '#5e04e4',
            600: '#4901b2',
            700: '#340080',
            800: '#1f004f',
            900: '#0b001f',
        }
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.900rem",
        "2sm": "0.960rem",
        md: "1.1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    components: {
        Link: {
            baseStyle: {
                _hover:{
                    textDecoration: "none"
                }
            }
        },
        Button: {
            variants: {
                outline: {
                    border: 0,
                    height: "2.1rem",
                    _hover: {
                        bg: "white",
                        color: "gray.background"
                    }
                }
            },
        }
    }
})
export default customTheme


