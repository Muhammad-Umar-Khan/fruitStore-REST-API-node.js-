import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/fruits.js";

const app = express();

app.use(bodyParser.json());
app.use('/fruits', usersRoutes);


app.listen(3000, () =>{
    console.log('Listening at port 3000');
})