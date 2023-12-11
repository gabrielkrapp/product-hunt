import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function voteProduct(productId: string, action: 'add' | 'remove'): Promise<number> {
    const updatedProduct = await prisma.product.update({
        where: { id: productId },
        data: {
            upvotes: action === 'add' ? { increment: 1 } : { decrement: 1 },
        },
        select: { upvotes: true },
    });
    return updatedProduct.upvotes;
}