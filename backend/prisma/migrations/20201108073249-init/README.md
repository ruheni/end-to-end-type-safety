# Migration `20201108073249-init`

This migration has been generated by ruheni at 11/8/2020, 10:32:49 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    PRIMARY KEY ("id")
)

CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    PRIMARY KEY ("id")
)

CREATE TABLE "_CategoryToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "Product.sku_unique" ON "Product"("sku")

CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B")

CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201108073249-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Product {
+  id          String     @id @default(uuid())
+  name        String
+  description String
+  price       String
+  sku         String     @unique
+  category    Category[]
+}
+
+model Category {
+  id       String    @id @default(uuid())
+  name     String
+  products Product[]
+}
```

