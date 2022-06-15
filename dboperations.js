var config = require('./dbconfig');
const sql = require('mssql');

async  function get_anonymous(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from auth_user");
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


module.exports = {
    get_team_dropdown : get_team_dropdown,
    get_all_teams : get_all_teams,
    get_anonymous : get_anonymous,
    get_join :get_join
}

