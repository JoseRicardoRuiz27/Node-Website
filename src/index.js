import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('cliente', join(__dirname, 'cliente'))

app.get(`/`, (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/about.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/contact.html')
})

app.listen(3001)
console.log('Hola express')