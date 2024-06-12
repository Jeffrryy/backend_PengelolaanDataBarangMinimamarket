import mysql from 'mysql'

const connection =mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"db_stokbarangminimarket",
    multipleStatements: true
});
// koneksi database
connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

export default connection