import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { join } from 'path'
import * as typeDefs from './graphql'


export const schema = makeSchema({
    types: typeDefs,
    outputs: {
        typegen: join(__dirname, '..', '/generated/typings.ts'),
        schema: join(__dirname, '..', '/generated/schema.graphql'),
    },
    typegenAutoConfig: {
        sources: [
            {
                source: require.resolve('./context'),
                alias: 'ContextModule'
            }
        ],
        contextType: 'ContextModule.Context'
    },
    plugins: [nexusPrisma()]
})
