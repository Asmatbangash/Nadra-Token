import dotenv from 'dotenv'
import ConnectedDb from './db/db.connection.js'
import { app } from './app.js'

dotenv.config()
const port = process.env.PORT || 8080;


ConnectedDb().then(()=> app.listen(port, () => {
console.log(`server is listning on port ${port}`)
})).catch((err) => console.log('database connection failed!', err))