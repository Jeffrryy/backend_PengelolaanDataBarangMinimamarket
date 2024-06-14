import express from 'express'
import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import barangmasukRoute from './route/barangMasukRoute.js'
import kategoriRoute from './route/kategoriRoute.js'
import barangRoute from './route/barangRoute.js'
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config()
app.use(cors())
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(barangmasukRoute)
app.use(kategoriRoute)
app.use(barangRoute)

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

