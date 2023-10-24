import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products",
      },
      quantity: {
        type: Number,
      },
      _id: false,
    },
  ],
});

export const cartsModel = mongoose.model("Carts", cartsSchema);

/////// {products:['1234f44rf','1234dd']}
