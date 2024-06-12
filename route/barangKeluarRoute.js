import {getAllBarangKeluar,getFindBarangKeluarById,postNewBarangKeluar,deleteBarangKeluar} from '../controller/barangKeluarController.js'
import express from 'express'

const app = express()

app.get('/barangmasuk',getAllBarangKeluar)
app.get('/barangmasuk/:id',getFindBarangKeluarById)
app.post('/barangmasuk',postNewBarangKeluar)
app.delete('/barangmasuk/:id',deleteBarangKeluar)

//lanjutkan barangController
export default app