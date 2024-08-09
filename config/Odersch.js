import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
 name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  zip: String,
  country: String,
  cartItems: Array,
  quantities: Object,
  totalAmount: Number,
  paymentStatus: String,  
},{
  timestamps: true,
}
);

 export default mongoose.model('Order', OrderSchema);