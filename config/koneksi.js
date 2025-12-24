import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const db = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
});

// Jalankan koneksi Database
db.connect((err) => {
    // Jika err
    if (err) {
        console.error('Koneksi gagal', err);
        return;
    }
    // Jika berhasil
    console.log('Koneksi berhasil');
});

export default db;