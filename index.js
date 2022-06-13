import express from "express";
import bodyParser from 'body-parser';
import usersROutes from './routes/user.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/', usersROutes);

app.get('/',(req,res)=>{
    console.log('TEST!!!');
    res.send('HOMEPAGE');
});

app.listen(PORT,( )=> console.log(`Serer Running on port: ${PORT}`));
  
// ├── package.json
// ├── client
// ├── src
// │   ├── data
// │   ├── plugins
// │   ├── routes
// │   └── views
// └── test