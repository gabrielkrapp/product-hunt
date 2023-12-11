import { PrismaClient } from "@prisma/client";

export async function findProductById(productId: string) {
    const prisma = new PrismaClient();
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        return product;
    } finally {
        await prisma.$disconnect();
    }
}
