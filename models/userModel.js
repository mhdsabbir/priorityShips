import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    carFrom: {
      type: String,
      required: true,
    
    },
    carTo: {
      type: String,
      required: true,
      
    },
    open: {
      type: String,
    },
    enclosed: {
      type: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
