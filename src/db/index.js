import mongoose from "mongoose"
import { DB_NAME} from "../constants.js"


const connectDB = async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log (`\n mongodb connected !! DB_HOST :${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR",error);
        process.exit(1)g
    }
}

export default connectDB