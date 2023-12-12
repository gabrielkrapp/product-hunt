import express from 'express';
import cors from 'cors';
import getproducts from './routes/GetProducts';
import getproduct from './routes/GetProduct';
import errorHandler from './utils/ErrorHandler';
import createproduct from './routes/CreateProduct';
import voteproduct from './routes/VoteProduct';
import getproductvotes from './routes/GetProductVotes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(getproducts);
app.use(getproduct);
app.use(errorHandler);
app.use(createproduct);
app.use(voteproduct);
app.use(getproductvotes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

