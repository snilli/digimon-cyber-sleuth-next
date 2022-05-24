import { useMemo } from 'react'
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client'
import merge from 'deepmerge'
import deepEqual from 'deep-equal'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:3333/api/graphql',
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache(),
    })
}

export function initializeApollo(
    initialState: NormalizedCacheObject | null = null,
) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
        const data = merge<NormalizedCacheObject>(existingCache, initialState, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((des) =>
                    sourceArray.every((source) => {
                        return !deepEqual(des, source)
                    }),
                ),
                true,
            ],
        })

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function addApolloState(
    client: ApolloClient<NormalizedCacheObject>,
    pageProps: any,
) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }

    return pageProps
}

export function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME]
    return useMemo(() => initializeApollo(state), [state])
}
