import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}))
app.use(cookieParser())


// routes
import { router } from './routes/User.route.js'
app.use('/api/v1/user',router)
app.use('/api/v1/token',router)


export {app}