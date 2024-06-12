app.post('/api/bootcamp', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO admin SET ?';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

app.get('/api/bootcamp',(req,res) => {
    //query untuk dijalankan
    const querySql = "SELECT * From admin"

    //jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

app.put('/api/bootcamp/:id' ,(req,res) => {

    //query mysql
    const data ={...req.body}
    const querySearch ='SELECT * From admin WHERE id_admin = ?'
    const queryUpdate = 'UPDATE admin SET ? WHERE id_admin = ?'

    koneksi.query(querySearch,req.params.id,(err,rows,field) => {
        //error handling
        if(err){
            return res.status(500).json({messsage:'ada kesalahan', error:err})
        }

        //jika id yang dimasukan sesuai yang ada di database
        if(rows.length){
            //jalankan query update
            koneksi.query(queryUpdate, [data, req.params.id], (err,rows,field) => {
                if(err){
                    return res.status(500).json({messsage:'ada kesalahan', error:err})
                }

                res.status(200).json({message:"berhasil update data", success:true})
            })
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    })
})

app.delete('/api/bootcamp/:id', (req,res) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM admin WHERE id_admin = ?'
    const queryDelete = 'DELETE FROM admin WHERE id_admin = ?'

    //jalankan query unutk melakukan pencarian data
    koneksi.query(querySearch,req.params.id,(err,rows,field) => {
        if(err){
            return res.status(500).json({message:'ada kesalahan', error:err})
        }
    
    //jika id yang dimasukan sesuai dengan data yang ada
        if(rows.length) {
            koneksi.query(queryDelete,req.params.id,(err,rows,field) => {
                //error handling 
                if(err){
                    res.status(500).json({message:'ada kesalahan', error:err})
                }
    
                //jika delete berhasil
                return res.status(200).json({success:true,message:'berhasil hapus data'})
                
            })
        } else {
            return res.status(404).json({message:'data tidak ditemukan', success:false})
        }
    })
   

  
})

const updateBarangMasuk = async(req,res) => {
    //query mysql
    const data ={...req.body}
   
    const querySearch = `SELECT * From barang_masuk WHERE id_barang = ?`
    const queryUpdate =` UPDATE barang_masuk SET ? WHERE id_barang =  ?`

   connection.query(querySearch,req.params.id,(err,rows,field) => {
       //error handling
    if(err) {
       return res.status(500).json({messsage:"Ada kesalahan", error:err})
    }

    //jika id yang dimasukan yang ada di databsae
    if(rows.length){
       connection.query(queryUpdate,[data,req.params.id],(err,rows,field) => {
           if(err){
               return res.status(500).json({message:"ada kesalahan", error:err})
           }
           return res.status(200).json({message:`berhasil update id ${req.params.id} `})
       })
    } else {
       return res.status(404).json({message:"data tidak ditemukan", success:false})
    }
   })
}