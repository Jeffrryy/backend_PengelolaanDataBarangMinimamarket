import {getAllBarangMasuk,getFindBarangMasukById,postNewBarangMasuk,deleteBarangMasuk} from '../controller/barangMasukController.js'
import express from 'express'

const app = express()

app.get('/barangmasuk',getAllBarangMasuk)
app.get('/barangmasuk/:id',getFindBarangMasukById)
app.post('/barangmasuk',postNewBarangMasuk)
app.delete('/barangmasuk/:id',deleteBarangMasuk)


export default app