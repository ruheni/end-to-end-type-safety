import { queryType, stringArg } from "@nexus/schema";

export const Queries = queryType({
    definition(t) {
        t.list.field('movies', {
            type: 'Movie',
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.movie.findMany()
            }
        });
        t.field('movie', {
            type: 'Movie',
            args: {
                id: stringArg({ nullable: false })
            },
            resolve: (_parent, args, ctx) => {
                return ctx.prisma.movie.findOne({
                    where: { id: args.id }
                })
            }
        })
    }
})
