import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-router";
import adminRouter from "./routes/admin-router.js";
import movieRouter from "./routes/movie-router";
import bookingsRouter from "./routes/booking-router";
import cors from "cors";


dotenv.config();
const app = express();

// middlewears
app.use(cors());
app.use(express.json())
  app.use("/user", userRouter);
  app.use("/admin", adminRouter);
  app.use("/movie", movieRouter);
   app.use("/booking",bookingsRouter);

mmongoose.connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));





  
