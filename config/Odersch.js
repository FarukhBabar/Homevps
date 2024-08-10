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
  orderNumber: {
    type: String,
    default: () => {
      return `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    },
  },
},{
  timestamps: true,
}
);

 export default mongoose.model('Order', OrderSchema);