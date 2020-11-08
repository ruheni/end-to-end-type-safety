import { objectType } from '@nexus/schema'

export const Product = objectType({
    name: 'Product',
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.price();
        t.model.sku()
        t.model.categories()

    }
})
