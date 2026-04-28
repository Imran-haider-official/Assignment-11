import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import ConnectDB from './src/config/db.js';
const app = express();
const Port = 3000;
import ProductRoutes from './src/Routes/ProductRoutes.js'
import userRoutes from './src/Routes/UserRoute.js'
app.use(cors()); 
app.use(express.json())
ConnectDB();
// Corrected line: invoke the function
app.use('/products', ProductRoutes)
app.use('/user', userRoutes)
app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`);
})
