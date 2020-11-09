import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));

app.use('/posts', postRoutes);



const CONNECTION_URL = 'mongodb+srv://MERN:MERN123@cluster0.cnrw8.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 9000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
    
mongoose.set('useFindAndModify', false);