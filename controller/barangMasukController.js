import connection from '../config/config.js'

const getAllBarangMasuk= async (req,res) => {
    const sql = "SELECT * FROM barang_masuk"

    connection.query(sql,(error,result) => {
        // if(error) {
        //     console.error(error);
        //     res.status(500).json({msg:error})
        //     return
        // }
        // res.json(result)
        if(error) return res.send(error);
        res.send(result)
    })
}

const getFindBarangMasukById = async (req,res) => {
    const {id_barang} = req.body
    const sql = `SELECT * FROM barang_masuk WHERE id_barang = ${id_barang}`
 
    connection.query(sql,(error,rows) => {
        if(error){
            return res.send(error)
        } 
        if(rows.length) {
            res.send(rows)
        } else {
            return res.status(404).json({message:"data tidak ditemukan"})
        }
    })
}

const postNewBarangMasuk = async (req,res) => {
    // const data ={...req.body} 
    const sql = "INSERT INTO barang_masuk SET ?"

    connection.query(sql,req.body,(err,result,field) => {
        if(err) {
            return res.status(500).json({message:"gagal insert data", error:err})
        }

        res.status(201).json({message:"berhasil Insert Data", data:req.body})
    })
}

const deleteBarangMasuk = async (req,res) => {
    const {id_barang} = req.body
        const sqlSearch = `SELECT * FROM barang_masuk WHERE id_barang =  ${id_barang}`
        const sqlDelete = `DELETE FROM barang_masuk WHERE id_barang =  ${id_barang}`

        connection.query(sqlSearch,(err,rows,field) => {
                if(err) {
                    return res.status(500).json({message:"Ada Kesalahan", error:err})
                }

                if(rows.length) {
                    connection.query(sqlDelete,(err,rows,field) => {
                        if(err){
                            res.status(500).json({message:"Ada Kesalahan", error:err})
                        
                        }
                        return res.status(200).json({message:`Berhasil delete row id ${id_barang}`, success:true})
                    })
                } else {
                    return res.status(404).json({message:"data tidak ditemukan", success:false})
                }
        })
}


export {getAllBarangMasuk,getFindBarangMasukById,postNewBarangMasuk,deleteBarangMasuk}