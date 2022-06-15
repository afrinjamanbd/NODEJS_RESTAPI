var config = require('./dbconfig');
const sql = require('mssql');

async  function getmodels(){

    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from AllTeams");
        // return products.recordset; == return products.recordsets[0];
        // Array slicing can be possible -- return products.recordset.slice(1, 3);
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports = {
    getmodels : getmodels
}

