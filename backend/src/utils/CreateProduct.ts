import { PrismaClient } from "@prisma/client";

export async function createProduct(title: string, description: string, imageUrl?: string) {
    const prisma = new PrismaClient();
    try {
        const product = await prisma.product.create({
            data: {
                title,
                description,
                imageUrl,
            },
        });
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    } 
    finally {
        await prisma.$disconnect();
    }
}
