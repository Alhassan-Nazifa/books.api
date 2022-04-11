const express = require("express");
const logger =require("./middlewares/books.logger")
const booksRoute=require("./routes/booksRoute")


const  app = express()

 //middleware
 app.use(express.json());
app.use(logger);
 app.use(booksRoute)
 
 //home route
 app.get("/", (req, res)=>{
    res.json("Welcome To My Library")
})

const PORT =5000


app.listen(PORT, ()=>{
    console.log("server is working")

})
















