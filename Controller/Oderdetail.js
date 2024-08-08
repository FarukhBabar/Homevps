import OrderSchema from'../config/Odersch.js'

export const Checkout= async(req,res)=>{
     const { name, email, phone, address, city, zip, country, cartItems, quantities, totalAmount } = req.body;
      try {
    const newOrder = new OrderSchema({
      name,
      email,
      phone,
      address,
      city,
      zip,
      country,
      cartItems,
      quantities,
      totalAmount
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}