const express=require("express");
const app=express();
const port=5000;
app.get("/",(req,res)=>{
    const fs=require('fs');
    fs.readdir(".",function(err,files){
        if(err) throw err;
        console.log(files);
        // res.write(`${files}`)
        res.status(200).send(JSON.stringify({
            files
        }));
})
})

app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})