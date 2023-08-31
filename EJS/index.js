import express from "express";
import bodyParser from "body-parser";
  const app=express();
  const port=3000;


  app.use(bodyParser.urlencoded({extended:true}));

  app.get("/",(req,res)=>{
        res.render("index.ejs");
  })
  app.post("/submit",(req,res)=>{
        const numletter=req.body['Fname'].length + req.body['lname'].length;
        res.render("index.ejs",{numberofletter:numletter});
  })

  app.listen(port,()=>{
    console.log(`App is running at server ${port}`)
  })
