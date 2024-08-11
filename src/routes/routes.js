import {Router} from 'express';

const router = Router()

router.get(`/`, (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/about.html')
})

router.get('/contact', (req, res) => {
    res.sendFile(process.cwd() + '/src/cliente/contact.html')
})


export default router