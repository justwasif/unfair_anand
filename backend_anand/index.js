import dotenv from "dotenv";
import run from "./db/bd.js";
import express from "express";

const app=express()



dotenv.config();

// const db=async()=>{
//     await run();

// }

const Port=8000;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);

})
// db()
run()

export default app;



