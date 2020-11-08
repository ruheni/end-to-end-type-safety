import { intArg, mutationType, stringArg } from '@nexus/schema'

export const Mutations = mutationType({
    definition(t) {
        t.field('createProduct', {
            type: 'Product',
            args: {
                name: stringArg({ nullable: false }),
                description: stringArg({ nullable: false }),
                price: intArg({ nullable: false }),
                sku: stringArg({ nullable: false })
            },
            resolve: (_parent, args, ctx) => {
                return ctx.prisma.product.create({
                    data: args
                })
            }
        });
        t.field('createCategory', {
            type: 'Category',
            args: {
                name: stringArg({ nullable: false })
            },
            resolve: (_parent, args, ctx) => {
                return ctx.prisma.category.create({
                    data: args
                })
            }
        });
        t.field('categorizeProduct', {
            type: 'Product',
            args: {
                productId: stringArg({ nullable: false }),
                categoryId: stringArg({ nullable: false })
            },
            resolve: (_parent, args, ctx) => {
                return ctx.prisma.product.update({
                    where: {
                        id: args.productId
                    },
                    data: {
                        categories: {
                            connect: {
                                id: args.categoryId
                            }
                        }
                    }
                })
            }
        })
    }
})
