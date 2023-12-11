import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function hasUserVoted(userId: string, productId: string): Promise<boolean> {
    const vote = await prisma.userVote.findUnique({
        where: {
            userId_productId: {
                userId: userId,
                productId: productId,
            },
        },
    });
    return !!vote;
}
