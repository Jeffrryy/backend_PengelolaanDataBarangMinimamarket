import connection from '../config/config.js'

const getAllBarangKeluar= async (req,res) => {
    const sql = "SELECT * FROM barang"

    connection.query(sql,(error,result) => {
        // if(error) {
        //     console.error(error);
        //     res.status(500).json({msg:error})
        //     return
        // }
        // res.json(result)P
        if(error) return res.send(error);
        res.send(result)
    })
}

const getFindBarangKeluarById = async (req,res) => {
    const {id_barang} = req.body
    const sql = `SELECT * FROM barang WHERE id_barang = ${id_barang}`
 
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

const postNewBarangKeluar = async (req,res) => {
    // const data ={...req.body} 
    const sql = "INSERT INTO barang SET ?"

    connection.query(sql,req.body,(err,result,field) => {
        if(err) {
            return res.status(500).json({message:"gagal insert data", error:err})
        }

        res.status(201).json({message:"berhasil Insert Data", data:req.body})
    })
}

const deleteBarangKeluar = async (req,res) => {
    const {id_barang} = req.body
        const sqlSearch = `SELECT * FROM barang WHERE id_barang =  ${id_barang}`
        const sqlDelete = `DELETE FROM barang WHERE id_barang =  ${id_barang}`

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

const updateBarangMasuk = async(req,res) => {
    //query mysql
    const data ={...req.body}
   
    const querySearch = `SELECT * From barang WHERE id_barang = ?`
    const queryUpdate =` UPDATE barang SET ? WHERE id_barang =  ?`

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

//lanjut ubah kata databasemya
export {getAllBarangKeluar,getFindBarangKeluarById,postNewBarangKeluar,deleteBarangKeluar}