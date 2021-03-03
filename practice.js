import { makeConnection } from '/home/dgulai/Documents/practice/Hackathon1/API/6Connection/connection.js';
const request = await makeConnection();
const my = async() =>{
    const query = `
    SELECT *
    FROM [ExpenseTracker].[dbo].[Employee]
    WHERE [ExpenseTracker].[dbo].[Employee].[IsBillable]= 1`;
    const data = await request.query(query);
    console.log(data);
}
my();