import koneksi from "../config/koneksi.js";

// Menampilkan data tabel
export const getProducts = (req, res) => {
    koneksi.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).json({ Message: err });
        }
        res.json(results);
    });

};

// menambah
export const insertProduct = (req, res) => {
    const { nama, harga, id_category} = req.body;
    koneksi.query('INSERT INTO products (nama, price, id_category) VALUES (?, ?, ?)', [nama, harga, id_category], (err, results) => {
        if (err) {res.status(500).json({ Message: err });
        }
        res.json({ Message: "Produk berhasil ditambahkan", Data: results });
    });
};

// menampilkan data berdasarkan ID
export const showProduct = (req, res) => {
    const id = req.params.id;
    koneksi.query('SELECT * FROM products WHERE id_product = ?', [id], (err, results) => {

    // Jika err
        if (err) res.status(500).json({ Message: err });

    // jika data tidak ditemukan
        if (results.length === 0) {
            return  res.status(404).json({ Message: "produk tidak ditemukan" });
        }

    // Jika berhasil
        res.json(results[0]);
    });
}

// Update data berdasarkan ID
export const updateProduct = (req, res) => {
    const id = req.params.id;
    const { nama, harga, id_category } = req.body;
    koneksi.query('UPDATE products SET nama = ?, price = ?, id_category = ? WHERE id_product = ?', 
        [nama, harga, id_category, id], 
        (err, results) => {
            // Jika err
            if (err) res.status(500).json({ Message: err });

            // Jika berhasil
            res.json({ Message: "Produk berhasil diupdate", Data: results });
        });
};

// Hapus data berdasarkan ID
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    koneksi.query('DELETE FROM products WHERE id_product = ?', [id], (err, results) => {
        // Jika err
        if (err) res.status(500).json({ Message: err });
        // Jika berhasil
        res.json({ Message: "Produk berhasil dihapus", Data: results });
    });
};