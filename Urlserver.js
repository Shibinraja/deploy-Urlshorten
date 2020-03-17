const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const BodyParser = require('body-parser');
const shortid = require('shortid');
const validUrl = require('valid-url');
const path = require("path");

app.use(cors());
app.use(BodyParser.json());
app.use(express.static(path.join(__dirname,"Client", "build")))
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://shibinraja:karishma@cluster0-l5pvg.azure.mongodb.net/test?retryWrites=true&w=majority";
const baseUrl = "www.shorturl.com";



app.post('/api', (req, res) => {

    const urlCode = shortid.generate();

    // jwt.sign({OriginalUrl:req.body.url},'secretkey',(err,token)=>{
    //     res.json({token})
    // });

    // function authenticateToken (req,res,next){
    //     const bearerHeader = req.headers['authorization'];
    //     if(typeof bearerHeader !== 'undefined'){
    //         const bearer = bearerHeader.split(" ");
    //         const bearerToken = bearer[1];
    //         req.token = bearerToken;
    //         next();
    //     }else{
    //         res.sendStatus(403);
    //     }
    // };


    if (validUrl.isUri(req.body.url)) {

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            if (err) {
                console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
            }
            console.log('Connected...');
            let today = new Date();

            let array = [
                {
                    OriginalUrl: req.body.url,
                    urlCode: urlCode,
                    shortUrl: baseUrl + '/' + urlCode,
                    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                }
            ]
            var db = client.db("Instacar")
                db.collection("Urlshort").insertMany(array, function (err, result) {
                if (err) throw err;

                res.json({
                    shortUrl: baseUrl + '/' + urlCode,
                })
                return 
            });

            client.close()

        });

    }
})

app.get('/:urlCode', (req, res) => {
    let short = req.params.urlCode;
    console.log(short);

    // jwt.verify(res.token, 'secretkey',(err,authData)=>{

    //         res.json({
    //             message:"Successful",
    //             authData
    //         })
    // })
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        var db = client.db("Instacar")
            cursor = db.collection("Urlshort").findOne({ urlCode: short })
            cursor.then(data => {
            res.redirect(data.OriginalUrl)
        });
        client.close();
    });
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "Client" , "build", "index.html"))
});


app.listen(PORT, console.log(`Server is starting at ${PORT}`))
