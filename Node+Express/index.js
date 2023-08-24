// import express from "express";
// const app=express();
// const port=3000;
// app.listen(port,()=>{
//     console.log(`Server is running at port ${port}`);
// })
// console.log("Hello")



import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    //  res.send("<h1>MIHIR</h1>")
    res.send("MIHIR")

});
app.post("./register",(req,res)=>{
    res.sendStatus(201);
})
app.put("./mihir",(req,res)=>{
    res.sendStatus(200);
});
app.patch("./mihir",(req,res)=>{
    res.sendStatus(200);
})

app.get("/about",(req,res)=>{
    res.send("MIHIR KUMAR")
});
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});
