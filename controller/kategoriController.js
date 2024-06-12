import connection from "../config/config.js";

const getAllKategori = async (req,res) => {
    const sql = "SELECT * FROM kategori"

    connection.query(sql,(err,result) => {
        if(err) {
            return res.status(500).json({message:"Ada kesalahan" , error:err})
        }
         res.status(200).json({message:"data ditemukan", data:result})
    })
}

const postNewKategori = async (req,res) => {
    const data = req.body
    const sql = "INSERT INTO kategori SET ?"

    connection.query(sql,data,(err,result) => {
        if(err) {
            return res.status(500).json({messsage:"Ada kesalahan",success:false})
        }
        res.status(201).json({messsage:"Berhasil Input Data ", success:true})
    })
}

const deleteKategori = async (req,res) => {
    const {id_kategori} = req.body
    const sqlSearch = `SELECT * FROM kategori WHERE id_kategori = ${id_kategori}`
    const sqlDelete = `DELETE FROM kategori WHERE id_kategori = ${id_kategori}`

    connection.query(sqlSearch,(err,rows,result) => {
        if(err) {
            return res.status(500).json({message:"Ada kesalahan",success:false})
        }
        if(rows.length){
            connection.query(sqlDelete,(err,result)=>{
                if(err){
                    return res.status(500).json({message:"Ada kesalahan", success :false})
                }
                return res.status(201).json({message:`Berhasil Delete row id ${id_kategori} `})
            })
        } else {
            return res.status(404).json({message:"data tidak ditemukan"})
        }
    })
}
export {getAllKategori,postNewKategori,deleteKategori} 