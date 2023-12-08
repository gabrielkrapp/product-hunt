import express from "express";
import { findProductById } from "../utils/FindProductById";
import { notFound, sendData } from "../utils/ResponseHandlers";
import { voteProduct } from "../utils/VoteProduct";

const router = express.Router();

router.post("/vote/:id", async (req, res, next) => {
    const { id } = req.params;

    const product = await findProductById(id);

    if (!product) {
        return notFound(res);
    }

    try {
        await voteProduct(id);

        return sendData(res, "Product was voted successfully.");
    } catch (err) {
        next(err)
    }
});

export default router;