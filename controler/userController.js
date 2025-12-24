import koneksi from "../config/koneksi.js";

// Menampilkan data tabel
export const getUser = (req, res) => {
    koneksi.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ Message: err });
        }
        res.json(results);
    });

};
// Menyimpan data
export const insertUser = (req, res) => {
    const { nama, email, password } = req.body;
    koneksi.query('INSERT INTO users (nama, email, password) VALUES (?, ?, ?)', [nama, email, password], (err, results) => {
        if (err) {res.status(500).json({ Message: err });
        }
        res.json({ Message: "User berhasil ditambahkan", Data: results });
    });
};

// menampilkan data berdasarkan ID
export const showUser = (req, res) => {
    const id = req.params.id;
    koneksi.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {

    // Jika err
        if (err) res.status(500).json({ Message: err });

    // jika data tidak ditemukan
        if (results.length === 0) {
            return  res.status(404).json({ Message: "User tidak ditemukan" });
        }

    // Jika berhasil
        res.json(results[0]);
    });
}

// Update data berdasarkan ID
export const updateUser = (req, res) => {
    const id = req.params.id;
    const { nama, email } = req.body;
    koneksi.query('UPDATE users SET nama = ?, email = ? WHERE id = ?', 
        [nama, email, id], 
        (err, results) => {
            // Jika err
            if (err) res.status(500).json({ Message: err });

            // Jika berhasil
            res.json({ Message: "User berhasil diupdate", Data: results });
        });
};

// Hapus data berdasarkan ID
export const deleteUser = (req, res) => {
    const id = req.params.id;
    koneksi.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        // Jika err
        if (err) res.status(500).json({ Message: err });
        // Jika berhasil
        res.json({ Message: "User berhasil dihapus", Data: results });
    });
};
