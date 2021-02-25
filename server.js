const express = require ("express");
const app = express();
const port = process.env.PORT || 5000;

function TimeLogger(req,res,next){
    let date = new Date();
    console.log(date);
    let jour = date.getDay();
    let hour = date.getHours();
    console.log(hour);
    console.log(jour);
    if(jour>=1  && jour<=5 && hour<=17 && hour >=9){
        next()
    }else{
        res.send("ouuuuuuups page non disponible")
    }
}
app.use(TimeLogger);
app.use(express.static('public'));

app.listen(port,err=>{
    err?console.log(err):console.log(`the server is runnig on ${port}`)
});