import mongoose from "mongoose";

//schema that defines product
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  genre: {
    type: String,
    required: true,
    maxlength: 60,
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
});
