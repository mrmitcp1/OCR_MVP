import express from 'express'
import cors from 'cors'
import {AppDataSource} from "./src/models/data-source";
import {Trips} from "./src/models/entity/Trips";
import bodyParser from 'body-parser'
import {TripRouter} from "./src/router/trip.router";


AppDataSource.initialize()
.then(()=>{
    console.log('Data Source has been initialized!')
})
.catch((err)=>{
    console.log('Error during Data Source initialization:',err)
})

export const TripRepo = AppDataSource.getRepository(Trips)

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use('/api',TripRouter)

app.listen(4000, () => {
    console.log("Server is running at http://localhost:4000");
});