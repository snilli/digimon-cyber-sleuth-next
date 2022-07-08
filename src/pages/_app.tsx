import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import { NextPage } from 'next'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: React.ReactElement) => React.ReactNode
}

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
	Component: NextPageWithLayout
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props
	const getLayout = Component.getLayout ?? ((page) => page)

	return getLayout(
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<CssBaseline />

			<Component {...pageProps} />
		</CacheProvider>,
	)
}
