import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { PageConfig, NextApiRequest, NextApiResponse } from 'next'
import { schema } from '../../graphql/schema'
import { GraphQLSchema } from 'graphql'

const apolloServer = new ApolloServer({
    schema: schema as unknown as GraphQLSchema,
})

const startServer = apolloServer.start()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://studio.apollographql.com'
    )
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    if (req.method === 'OPTIONS') {
        res.end()
        return
    }
    await startServer

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
}
