import dotenv from "dotenv"
dotenv.config();

// const port=mongoose.connect(process.env.MONGO_URI);
const port=process.env.PORT
export default port
