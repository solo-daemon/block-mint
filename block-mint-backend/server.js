const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const apikey = "A5SNSIIEJ87S6B1TKX5D5X132B5JWTNYGJ";

const app = express();
const cors = require('cors');
app.use(bodyParser.json(),cors());

app.get('/transaclist',(req,res)=>{   
    async function transaclist(address){
        var sendObj = {
            method: "GET"
        };    
        const respo = await fetch("https://api.etherscan.io/api?module=account&action=txlist&address="+address+"&tag=latest&apikey="+apikey, sendObj).then((result)=>{
            result.json().then((jsonBody)=>{
                res.json(jsonBody);
            });
        })
    };
    transaclist(publicAddress);
});

app.get('/ethbalance',(req,res)=>{
    console.log("hello world")
    console.log(apikey)
    const publicAddress = req.body.publicAddress;
    async function ethbalance(address){
        console.log(apikey)
        var sendObj = {
            method: "GET"
        };    
        const respo = await fetch("https://api.etherscan.io/api?module=account&action=balance&address="+address+"bae&tag=latest&apikey="+apikey
        , sendObj).then((result)=>{
            result.json().then((jsonBody)=>{
                res.json(jsonBody);
            });
        })
    };
    console.log("hellow world 2")
    ethbalance(publicAddress);
    
});

// app.get('/ethbalance',(req,res)=>{
//     const publicAddress = req.body.publicAddress;
//     const apikey = "FZTQTYFQPKEZM1XCB8Q4CE64ZQZZC7TGVB";
//     async function erc20fetch(address){
        
//         var sendObj = {
//             method: "GET"
//         };    
//         const respo = await fetch("https://api.etherscan.io/api?module=account&action=balance&address="+address+"&tag=latest&apikey="+apikey, sendObj).then((result)=>{
//             result.json().then((jsonBody)=>{
//                 res.json(jsonBody);
//             });
//         })
//     };
//     erc20fetch(publicAddress);
// });


// app.get('/ethbalance',(req,res)=>{
//     const publicAddress = req.body.publicAddress;
//     const apikey = "FZTQTYFQPKEZM1XCB8Q4CE64ZQZZC7TGVB";
//     async function erc20fetch(address){
        
//         var sendObj = {
//             method: "GET"
//         };    
//         const respo = await fetch("https://api.etherscan.io/api?module=account&action=balance&address="+address+"&tag=latest&apikey="+apikey, sendObj).then((result)=>{
//             result.json().then((jsonBody)=>{
//                 res.json(jsonBody);
//             });
//         })
//     };
//     erc20fetch(publicAddress);
// });


// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(60001, ()=>{
  console.log("listening to port 60001")
})

module.exports = app;