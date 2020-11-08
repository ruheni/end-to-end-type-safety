import { queryType } from '@nexus/schema';

export const Queries = queryType({
    definition(t) {
        t.list.field('products', {
            type: 'Product',
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.product.findMany()
            }
        });
        t.list.field('categories', {
            type: 'Category',
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.category.findMany()
            }
        });
    }
})
