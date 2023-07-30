import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import path from "path";

//configure env
dotenv.config();

// databse config
connectDB();

//rest object
const app = express();


//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))


//rest api
app.use('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})


  //routes
app.use("/api/v1", authRoutes);



  //PORT
const PORT = process.env.PORT || 8080;


//run listen
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
    );
  });