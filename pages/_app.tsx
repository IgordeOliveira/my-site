import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../styles/customTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider resetCSS theme={customTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
  )
}
export default MyApp
