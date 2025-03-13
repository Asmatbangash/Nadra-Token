import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}))


export {app}