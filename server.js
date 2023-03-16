const express = require("express")
const hbs =require("hbs")
const fs =require("fs")
const appRootPath = require("app-root-path")

const env=require("dotenv").config({
    path:appRootPath + "/.env"
})
const app = express()

/////////////////////////////////////////////////////////////////////functions
hbs.registerPartials(__dirname + "/views/partials")
hbs.registerHelper("currentlyYear",()=>{return new Date().getFullYear()})
hbs.registerHelper("currentlyYear2",()=>{return new Date()})

/////////////////////////////////////////////////////////////////////handlers

app.use(express.static(appRootPath+'/public')) 
app.set("view engine","hbs")

/////////////////////////////////////////////////////////////////////middleware

app.use((req,res,next)=>{
    const now = Date().toString()
    let log=`now time is ${now} ; request method : ${req.method} ; request url : ${req.url}`
    console.log(log)
    fs.appendFileSync("server.log",log + "\n")
    next()
})
///////////////////////////////////////////////when site is offline
// app.use((req,res,next)=>{
    //     res.render("offline.hbs")
    
    // })
    
    /////////////////////////////////////////////////////////////////////pages

    
    
    
    app.get( "/",(req,res)=>{
        
        res.render("home.hbs",{
            pageTitle:"صفخه اصلی سایت",
            wellcomeMassege:"به صفحه من خوش آمدی",
            
        })
        
    })
    
    app.get( "/about",(req,res)=>{
        
        res.render("about.hbs",{
            pageTitle:"درباره ما ",
            
        } )
        
    })
    ///////////////////////////////////////////////////////////////////////////listener
    app.post( "/signin",(req,res)=>{
        
       })
const port = process.env.PORT
app.listen(port,()=>{console.log("server is runing in %d",port)})