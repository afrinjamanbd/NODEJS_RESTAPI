const config = {
    user :'sa',
    password :'password@',
    server:'DATA-RF21492L',
    database:'ML',
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