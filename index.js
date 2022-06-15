var Db  = require('./dboperations');
var Order = require('./model');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

app.get('/',(req,res)=>{
    console.log('TEST!!!');
    res.send('HOMEPAGE');
});

router.route('/teams').get((request,response)=>{
    
    dboperations.getmodels().then(result => {
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API is runnning at ' + port);



// dboperations.getmodels().then(result =>{
//     console.log(result);
// });


  
// ├── package.json
// ├── client
// ├── src
// │   ├── data
// │   ├── plugins
// │   ├── routes
// │   └── views
// └── test