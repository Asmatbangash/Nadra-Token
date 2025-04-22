import mongoose from 'mongoose'
import { Db_Name } from '../constent.js'


const ConnectedDb = async () =>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
      console.log('database successfully connected!')
    }catch(error){
        console.log('database connection faild!', error)
    }
}

export default ConnectedDb