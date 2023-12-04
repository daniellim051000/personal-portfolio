import type { AppProps } from "next/app"
import Head from "next/head";

import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";

function App({ Component, pageProps }: AppProps) {
  
    const name = "Daniel Lim";

    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>{name + "'s Portfolio"}</title>
                <meta
                    name="description"
                    content="Daniel Lim's portfolio, built with Next.js and Typescript."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default App;