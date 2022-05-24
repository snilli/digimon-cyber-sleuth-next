import 'reflect-metadata'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import { AppProps } from 'next/app'
// import { ThemeProvider } from 'next-themes'
import { ApolloProvider } from '@apollo/client'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { useApollo } from '../graphql/client'
import MuiLayout from '../layouts/MuiUi'
import createEmotionCache from '../utils/createEmotionCache'
import '../../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props
    const apolloClient = useApollo(pageProps)

    return (
        <RecoilRoot>
            <ApolloProvider client={apolloClient}>
                <CacheProvider value={emotionCache}>
                    <Head>
                        <title>Digimon DB</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1, width=device-width"
                        />
                    </Head>
                    {/* <ThemeProvider
                        themes={['business', 'dark', 'pastel']}
                        defaultTheme="wireframe"
                    > */}
                    <CssBaseline />
                    {pageProps.statusCode ? (
                        <Component {...pageProps} />
                    ) : (
                        <MuiLayout>
                            <Component {...pageProps} />
                        </MuiLayout>
                    )}
                    {/* </ThemeProvider> */}
                </CacheProvider>
            </ApolloProvider>
        </RecoilRoot>
    )
}
