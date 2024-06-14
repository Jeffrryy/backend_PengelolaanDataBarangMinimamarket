import {getAllBarangKeluar,getFindBarangKeluarById,postNewBarangKeluar,deleteBarangKeluar} from '../controller/barangKeluarController.js'
import express from 'express'

const app = express()

app.get('/barangkeluar',getAllBarangKeluar)
app.get('/barangkeluar/:id',getFindBarangKeluarById)
app.post('/barangkeluar',postNewBarangKeluar)
app.delete('/barangkeluar/:id',deleteBarangKeluar)

//lanjutkan barangController
export default app