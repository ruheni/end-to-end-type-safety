import { intArg, mutationType, stringArg } from '@nexus/schema'

export const Mutations = mutationType({
    definition(t) {
        t.field('createMovie', {
            type: 'Movie',
            args: {
                title: stringArg({ nullable: false }),
                description: stringArg({ nullable: false }),
                rating: intArg({ nullable: false }),
                coverImage: stringArg({ nullable: false })
            },
            resolve: (_parent, args, ctx) => {
                return ctx.prisma.movie.create({
                    data: {
                        title: args.title,
                        description: args.description,
                        rating: args.rating,
                        coverImage: args.coverImage
                    }
                })
            }
        })
    }
})
