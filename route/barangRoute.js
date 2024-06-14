import  {getAllBarang,getFindBarangById,postNewBarang,deleteBarang,updateBarang} from '../controller/barangContoller.js'
import express from 'express' 

const app = express()

app.get('/barang',getAllBarang)
app.get('/barang/:id',getFindBarangById)
app.post('/barang',postNewBarang)
app.put('/barang/:id',updateBarang)
app.delete('/barang/:id',deleteBarang)


export default app