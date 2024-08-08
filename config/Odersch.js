import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderNumber: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  zip: String,
  country: String,
  cartItems: Array,
  quantities: Object,
  totalAmount: Number
});

 export default mongoose.model('Order', OrderSchema);