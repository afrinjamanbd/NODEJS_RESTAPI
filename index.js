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

    dboperations.get_all_teams().then(result => {
        response.json(result[0]);
    })
})

router.route('/childid').get((request,response)=>{
    
    dboperations.get_team_dropdown().then(result => {
        response.json(result[0]);
    })
})

router.route('/join').get((request,response)=>{
    
    dboperations.get_join().then(result => {
        response.json(result[0]);
    })
})

router.route('/random').get((request,response)=>{
    console.log('random called');
    dboperations.get_anonymous().then(result => {
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