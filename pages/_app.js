import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import "../styles/style.css"


const App = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <title>Acushen Gwada</title>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App