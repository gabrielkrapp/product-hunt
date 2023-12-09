import express from "express";
import { findProductById } from "../utils/FindProductById";
import { notFound, sendData } from "../utils/ResponseHandlers";
import { voteProduct } from "../utils/VoteProduct";
import { hasUserVoted } from "../utils/HasUserVoted";
import { CustomJwtPayload } from "../interfaces/CustomJwtPayload";
import { verifyToken } from "../utils/AuthenticateToken";

const router = express.Router();

router.post("/vote/:id", async (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization?.split(" ")[1];
    const product = await findProductById(id);

    if (!token) {
        return sendData(res, 'You must be logged in to vote.');
    }

    if (!product) {
        return notFound(res);
    }

    const tokenResult = await verifyToken(token);

    if (tokenResult.error || !tokenResult.decodedToken) {
        return sendData(res, tokenResult.error || 'Invalid or expired token');
    }

    const userHasVoted = await hasUserVoted(tokenResult.decodedToken.id, product.id);

    try {
        if (userHasVoted) {
            await voteProduct(id, 'remove');
        } else {
            await voteProduct(id, 'add');
        }

        return sendData(res, `Product vote ${userHasVoted ? 'removed' : 'added'} successfully.`);
    } catch (err) {
        next(err);
    }
});

export default router;