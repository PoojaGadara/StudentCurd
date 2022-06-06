import express from 'express';
const app =express();
import connectDB from './db/connectdb.js';
import {join} from 'path';
import web from './routes/web.js'
import bodyParser from 'body-parser'
const port =process.env.port || '3000'
const DATABASE_URL =process.env.DATABASE_URL || "mongodb://localhost:27017";

//database connect
connectDB(DATABASE_URL);


//middleware
app.use(bodyParser.json())  
app.use(bodyParser.urlencoded({extended : false}))


//static file
app.use("/student", express.static(join(process.cwd() ,"public")))
app.use("/student/edit", express.static(join(process.cwd() ,"public")))

//view engine
app.set('view engine','ejs')

//load route
app.use("/student" ,web )




app.listen(port , () => {
    console.log(`server listen on ${port}`);
})