import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function totalOfVotes(productId: string): Promise<number> {
    const product = await prisma.product.findUnique({
        where: { id: productId },
        select: { upvotes: true },
    });
    return product ? product.upvotes : 0;
}