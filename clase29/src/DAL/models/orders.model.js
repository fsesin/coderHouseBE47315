import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  order_number: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  products: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products",
      },
    ],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
});

export const ordersModel = mongoose.model("Orders", ordersSchema);
