import express from "express";
import {
quoteController,
  
} from "../controllers/authController.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/createQuote", quoteController);








export default router;