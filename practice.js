import { makeConnection } from '/home/dgulai/Documents/practice/Hackathon1/API/6Connection/connection.js';
const request = await makeConnection();
const my = async() =>{
    const monthNo = (await request.query(`SELECT MONTH(GETDATE())`)).recordset[0][''];
    const year = (await request.query(`SELECT YEAR(GETDATE())`)).recordset[0][''];
    const month = (await request.query(`select DateName( month , DateAdd( month , ${monthNo} , -1 ))`)).recordset[0][''];;
    console.log('hello');
    console.log(month);
    console.log(year);
}
my();