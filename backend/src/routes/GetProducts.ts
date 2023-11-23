import express from "express";
import { findAllProducts } from "../utils/FindAllProducts";
import { sendData } from "../utils/ResponseHandlers";

const router = express.Router();

router.get("/products", async (req, res, next) => {

    try {
        const products = await findAllProducts();
        return sendData(res, products);
    } catch (err) {
        next(err);
    }
});

export default router;