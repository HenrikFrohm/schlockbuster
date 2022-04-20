import mongoose from "mongoose";

//schema that defines product
const ProductSchema = new mongoose.Schema(
  {
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
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    //type is array, limited to num
    prices: {
      type: [Number],
      required: true,
    },
    //array that includes choosable objects that'll change the price
    platform: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

//if product doesn't exists in mongodb database, create it. Otherwise don't create it again.
//mongodb database will also be created if it doesn't exist.
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
