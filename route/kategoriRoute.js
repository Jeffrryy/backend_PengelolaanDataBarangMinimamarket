import { getAllKategori,postNewKategori,deleteKategori } from "../controller/kategoriController.js";
import express from "express"

const app = express()

app.get("/kategori",getAllKategori)
app.post("/kategori",postNewKategori)
app.delete("/kategori/:id",deleteKategori)


export default app