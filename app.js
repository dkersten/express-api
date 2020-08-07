import cars from './models/cars.js';
import express from 'express';
const app = express()
const port = 3020


app.get('/', (req, res) => {
    res.send('GTA5 Database')
})

// car routes
app.get('/cars', (req, res) => {
    return res.send(Object.values(cars))
})

app.get('/cars/:id', (req, res) => {
    return res.send(cars[req.params.id])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})