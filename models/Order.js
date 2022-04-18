import mongoose from "mongoose";

//schema that defines product
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 60,
    },
    total: {
      type: Number,
      required: true,
    },
    //when new order is created the initial state will be 0, which wiil be the first statusClass and icon
    status: {
      type: Number,
      default: 0,
    },
    //payment options
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//if product doesn't exists in mongodb database, create it. Otherwise don't create it again.
//mongodb database will also be created if it doesn't exist.
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
