import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: {
        body: {
            bg: '#F3F8EA',
        },
    },
}

const components = {
    Heading: {
        variants: {
            'heading-title': {
                letterSpacing: '-2.5px',
                fontSize: '52px',
                fontWeight: 300,
                lineHeight: 1
            },
            'heading-italic': {
                fontFamily: "'Bitter', serif",
                letterSpacing: '-0.5px',
                fontSize: '7rem',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: '0.85'
            },
            'heading-3': {
                letterSpacing: '-0.5px',
                marginBottom: '0',
                fontSize: '25px',
                fontWeight: '700',
                lineHeight: '1.2'
            }
        },
    },
}

const fonts = {
    heading: "'Inter', sans-serif;",
}
const colorScheme = {
    orangeRoom: '#d4b693',
}
const colors = {
    orangeRoom: '#d4b693',
    linksColor: '#FFD281',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors,
    colorScheme,
})
export default theme