import express from "express";
import { findProductById } from "../utils/FindProductById";
import { notFound, sendData } from "../utils/ResponseHandlers";

const router = express.Router();

router.get("/products/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await findProductById(id);
        if (!product) {
            return notFound(res);
        }
        return sendData(res, product);
    } catch (err) {
        next(err)
    }
});

export default router;