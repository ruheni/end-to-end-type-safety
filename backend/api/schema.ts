import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import * as typeDefs from './graphql'


export const schema = makeSchema({
    types: typeDefs,
    outputs: {
        typegen: __dirname + '/generated/nexus.ts',
        schema: __dirname + '/../schema.graphql',
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma'
            },
            {
                source: require.resolve('./context'),
                alias: 'Context'
            }
        ],
    },
    plugins: [nexusPrisma()]
})
