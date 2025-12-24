import express from 'express';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoute from './routes/productRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/products', productRoute);

app.listen(process.env.port, () => {
    console.log(`Server berjalan pada port di http://localhost:${process.env.port}`);
});