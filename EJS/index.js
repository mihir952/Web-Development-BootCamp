import express from "express";


const app=express();
const port=3000;


app.get("/",(req,res)=>{
    const today=new Date();
    const day=today.getDay();
    // console.log(day)

    let type="a weekday";
    let adv="Its time to work Hard";

    if(day==0 || day==6){
        type="a weekday";
        adv="Its time to have some fun";
    }
    else if(day==2){
        type="Hanuman day";
        adv="Its Hanuman Day Read Hanuman Chalisa";
    }

    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    })
})


app.listen(port,()=>{
    console.log(`App is Running at port : ${port}`);
})

