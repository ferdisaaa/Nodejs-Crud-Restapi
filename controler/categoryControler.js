import koneksi from "../config/koneksi.js";

// Menampilkan data tabel
export const getCategory = (req, res) => {
    koneksi.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            return res.status(500).json({ Message: err });
        }
        res.json(results);
    });

};

// menambah
export const insertCategory = (req, res) => {
    const { nama} = req.body;
    koneksi.query('INSERT INTO categories (nama) VALUES (?)', [nama], (err, results) => {
        if (err) {res.status(500).json({ Message: err });
        }
        res.json({ Message: "Kategori berhasil ditambahkan", Data: results });
    });
};

// Update
export const updateCategory = (req, res) => {
    const id = req.params.id;
    const { nama } = req.body;
    koneksi.query('UPDATE categories SET nama = ? WHERE id_category = ?', 
        [nama, id], 
        (err, results) => {
            // Jika err
            if (err) res.status(500).json({ Message: err });

            // Jika berhasil
            res.json({ Message: "Kategori berhasil diupdate", Data: results });
        });
};

// menampilkan data berdasarkan ID
export const showCategory = (req, res) => {
    const id = req.params.id;
    koneksi.query('SELECT * FROM categories WHERE id_category = ?', [id], (err, results) => {

    // Jika err
        if (err) res.status(500).json({ Message: err });

    // jika data tidak ditemukan
        if (results.length === 0) {
            return  res.status(404).json({ Message: "Category tidak ditemukan" });
        }

    // Jika berhasil
        res.json(results[0]);
    });
}

// Menghapus
export const deleteCategory = (req, res) => {
    const id = req.params.id;
    koneksi.query('DELETE FROM categories WHERE id_category = ?', [id], (err, results) => {
        // Jika err
        if (err) res.status(500).json({ Message: err });
        // Jika berhasil
        res.json({ Message: "Kategori berhasil dihapus", Data: results });
    });
};