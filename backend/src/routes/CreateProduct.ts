import express from "express";
import { notFound, sendData } from "../utils/ResponseHandlers";
import { createProduct } from "../utils/CreateProduct";
import { verifyToken } from "../utils/AuthenticateToken";

const router = express.Router();

router.post("/products/:id", async (req, res, next) => {
    const { title, description, imageUrl } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return sendData(res, 'You must be logged in to vote.');
    }

    const tokenResult = await verifyToken(token);

    if (tokenResult.error || !tokenResult.decodedToken) {
        return sendData(res, tokenResult.error || 'Invalid or expired token');
    }

    try {
        const product = await createProduct(title, description, imageUrl);
        return sendData(res, product);
    } catch (err) {
        next(err)
    }
});

export default router;