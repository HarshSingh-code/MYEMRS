
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dbConnect from './services/dbConnect.js';
import userRoutes from './user/userRoutes.js';
import patientRoutes from './patient/patientRoutes.js';
import errorHandler from './ErrorHandler.js';


morgan('tiny');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/login', userRoutes);
app.use('/patient', patientRoutes);


// app.get('/', (req, res) => {
//     console.log("Hello World");
//     return res.send("Hello World");
// })

app.use(errorHandler)



app.listen(5000, () => {
    console.log("App working on port 5000");
    dbConnect(process.env.MONGO_URI);

})