import userModel from "../models/userModel.js";



export const quoteController = async (req, res) => {
  try {
    const { carFrom, carTo, open, enclosed, } = req.body;
    
  
    //save
    const user = await new userModel({
      carFrom, carTo, open, enclosed,
    }).save();

    res.status(201).send({
      success: true,
      message: "Quote Create Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Creating",
      error,
    });
  }
};










