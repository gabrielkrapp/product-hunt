import express from "express";
import { findProductById } from "../utils/FindProductById";
import { notFound, sendData } from "../utils/ResponseHandlers";
import { totalOfVotes } from "../utils/TotalOfVotes";

const router = express.Router();

router.get("/vote/:id", async (req, res, next) => {
    const { id } = req.params;

    const product = await findProductById(id);

    if (!product) {
        return notFound(res);
    }

    try {
        const numberOfVotes = await totalOfVotes(id);

        return sendData(res, numberOfVotes);
    } catch (err) {
        next(err)
    }
});

export default router;