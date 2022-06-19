const config = {
    user :'sa',
    password :'B@ngl@desh123@',
    server:'192.168.0.26',
    database:'datascience',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 1433
}

// const config = {
//     user :'sa',
//     password :'pass',
//     server:'127.0.0.1',
//     database:'db',
//     options:{
//         trustedconnection: true,
//         enableArithAbort : true, 
//         instancename :'SQLEXPRESS'
//     },
//     port : 1433
// }
 
module.exports = config;  