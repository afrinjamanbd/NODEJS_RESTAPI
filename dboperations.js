var config = require('./dbconfig');
const sql = require('mssql');


async  function get_anonymous(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT  TOP (1000) * from [AllManagers]");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }   
}


async  function get_all_teams(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from AllTeams ");
        // return products.recordset; == return products.recordsets[0];
        // Array slicing can be possible -- return products.recordset.slice(1, 3);
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }  
}


async  function get_team_dropdown(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Team_Dropdown");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }   
}


async  function get_join(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query(`
        Select B.[TeamID],B.[TeamName],A.[childid],A.[name] 
        FROM ( SELECT TOP (1000) [id],[childid],[name],[code],[parentid]
        FROM [datascience].[dbo].[Team_Dropdown] ) as A                           
        Left join (SELECT TOP (1000) [TeamID],[TeamName]
        FROM [datascience].[dbo].[AllTeams]) as B      
        ON A.childid != B.[TeamID] 
        `);
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }   
}

async  function get_nested(){
    try{
        
        let pool = await sql.connect(config);
        let products = await pool.request().query(`SELECT TOP (20) [id]
        ,[TeamCode]
        ,[ASMCode]
        ,[ASMName]
        ,[RSMCode]
        ,[RSMName]
        ,[Region]
        ,[DSMCode]
        ,[DSMName] from DS_ALL_Managers`);
        obj = products.recordset;

        var count = Object.keys(obj).length;
        for (let i = 0; i < count; i++) {
            myobj = obj[i]
            let nest_obj = await pool.request().query(`SELECT TOP (20) [PSOCode],[PSOName] from DS_ALL_Managers where [DSMCode] = '${myobj['DSMCode']}'`);
            myobj["DSMLIST"] = nest_obj.recordset;
            console.log(myobj);
        }

        return obj;
    }
    catch(error){
        console.log(error);
    }   
}


async function addData(AllManagers) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('id', sql.BigInt, AllManagers.id)
            .input('TeamCode', sql.VarChar, AllManagers.TeamCode)
            .input('ASMCode', sql.VarChar, AllManagers.ASMCode)
            .input('ASMName', sql.VarChar, AllManagers.ASMName)
            .input('RSMCode', sql.VarChar, AllManagers.RSMCode)
            .input('RSMName', sql.VarChar, AllManagers.RSMName)
            .input('Region', sql.VarChar, AllManagers.Region)
            .input('DSMCode', sql.VarChar, AllManagers.DSMCode)
            .input('DSMName', sql.VarChar, AllManagers.DSMName)
            .input('PSOCode', sql.VarChar, AllManagers.PSOCode)
            .input('PSOName', sql.VarChar, AllManagers.PSOName)
            .execute('dbo.testsss');
            
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    get_team_dropdown : get_team_dropdown,
    get_all_teams : get_all_teams,
    get_anonymous : get_anonymous,
    get_join :get_join,
    get_nested : get_nested,
    addData:addData
}

