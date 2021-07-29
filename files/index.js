const currentDate=new Date();
const timestamp=currentDate.getTime();
const date=currentDate.getDate()+"-"+currentDate.getMonth()+"-"+currentDate.getFullYear();
const fs=require('fs');
fs.writeFile(`./${date}-${timestamp}.txt`,`${currentDate}`,function(err){
    if(err) throw err;
    console.log("file");})