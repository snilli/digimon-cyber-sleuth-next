// import 'reflect-metadata'
import { makeSchema, connectionPlugin } from 'nexus'
import { join } from 'path'
import * as types from './types'

export const schema = makeSchema({
    types,
    plugins: [connectionPlugin()],
    outputs: {
        typegen: join(
            process.cwd(),
            'src',
            'nexus-typegen',
            'index.d.ts'
        ),
        schema: join(process.cwd(), 'src', 'graphql', 'schema.graphql'),
    },
    sourceTypes: {
        modules: [
            {
                module: join(process.cwd(),'src','core','digimon','entitys','digimon-entity.ts'),
                alias: 'DigimonEntity',
            },
            {
                module: join(process.cwd(),'src','core','move','entitys','move-entity.ts'),
                alias: 'MoveEntity',
            },
            {
                module: join(process.cwd(),'src','core','ability','entitys','ability-entity.ts'),
                alias: 'AbilityEntity',
            },
        ],
    },
    contextType: {
        module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
        export: 'Context',
        alias: 'context',
    },
})
