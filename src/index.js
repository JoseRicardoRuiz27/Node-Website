import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from './routes/routes.js';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('cliente', join(__dirname, 'cliente'))

app.use(router)

app.use(express.static(join(__dirname, 'public')))

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
    console.log(`El puerto es http://localhost:${PORT}`)
})