import mongoose from 'mongoose'
import { Db_Name } from '../constent.js'
import { apiError } from '../utils/apiError.utils.js'


const ConnectedDb = async () =>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
    }catch(error){
      throw new apiError(500, "database connection faild!...",error)
    }
}

export default ConnectedDb