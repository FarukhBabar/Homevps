

import express from 'express';
import DbConnection from './config/Dbcon.js'; // Ensure the path is correct
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routers/Routerath.js';
import Getdata from './Routers/Gettingdata.js';
import FreeSchema from './config/Sundayschema.js';
import SmokinSchema from './config/Smokingess.js';
import userrouter from './Routers/user.routes.js';
import OrderSchema from './config/Odersch.js';
import Stripe from 'stripe';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8001; // Use the port from environment variables or fallback to 8001

app.use(express.json());
app.use(cors());
 const stripe = Stripe('sk_test_51PYLCyRrKUSfNnmkLuNef5mqXzSqi0Oypu8fKO3AvqsvMV3DMVROgPL7oK7w3k95myoW75PAQHcS9Fd8G8RABiot00LeEbE29R');

DbConnection(); // Initialize database connection

app.use(userrouter);
app.use("/api/v1/auth", router);
app.use("/api/v1/data", Getdata);
app.use('/uploads', express.static('uploads'));
// app.use("/api")
// Utility function to generate an order number
const generateOrderNumber = () => {
  const timestamp = Date.now().toString();
  const random = crypto.randomBytes(3).toString('hex');
  return `${timestamp}-${random}`;
};

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify email transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Error with email transporter configuration:', error);
  } else {
    console.log('Email transporter is ready');
  }
});

// Endpoint to fetch a single page data by ID
app.get("/singalepage/:id", async (req, res) => {
  try {
    const result = await FreeSchema.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});
// -----end point of the most selling product------
app.get('/most-selling', async (req, res) => {
  try {
    const models = ['Curtains', 'Tablecover', 'Teatowel' , 'Towelsacc']; // Add all your product model names here
    let allProducts = [];

    for (const modelName of models) {
      const Model = mongoose.model(modelName);
      const products = await Model.find().sort({ sales: 1 }).limit(10).exec();
      allProducts = allProducts.concat(products);
    }

    // Sort combined products by sales and limit the result to 10
    allProducts.sort((a, b) => b.sales - a.sales);
    allProducts = allProducts.slice(0, 10);

    res.json(allProducts);
  } catch (error) {
    console.error('Error fetching most selling products:', error);
    res.status(500).send('Server Error');
  }
});

// Endpoint to fetch a smoking single page data by ID
app.get("/smokingsingalepage/:id", async (req, res) => {
  try {
    const result = await SmokinSchema.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Endpoint to handle form submissions and send confirmation emails
app.post('/api/orders', async (req, res) => {
  const { name, email, phone, address, city, zip, country, cartItems, quantities, totalAmount } = req.body;

  try {
    const orderNumber = generateOrderNumber();

    const newOrder = new OrderSchema({
      orderNumber,
      name,
      email,
      phone,
      address,
      city,
      zip,
      country,
      cartItems,
      quantities,
      totalAmount,
    });

    await newOrder.save();

   app.get('/api/listorders', async (req, res) => {
  try {
    const orderList = await OrderSchema.find(); // Retrieve all orders from the database
    res.status(200).json(orderList); // Send the orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error });
  }
});


    // Send email to the user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Order Confirmation',
      text: `Your order has been placed successfully. Your order number is ${orderNumber}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json(newOrder);
      }
    });
  } catch (error) {
    console.log('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to handle payment intents
app.post('/api/payment_intents', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Endpoint to fetch most selling products
  app.get('/api/products/most-selling', async (req, res) => {
    try {
      const models = [FreeSchema, SmokinSchema ];
      let allProducts = [];

      for (const Model of models) {
        console.log(`Fetching data from model: ${Model.modelName}`);
        const products = await Model.find().sort({ sales: -1 }).limit(10).exec();
        allProducts = allProducts.concat(products);
      }

      allProducts.sort((a, b) => b.sales - a.sales);
      allProducts = allProducts.slice(0, 10);

      res.json(allProducts);
    } catch (error) {
      console.error('Error fetching most selling products:', error);
      res.status(500).send('Server Error');
    }
  });
  // Assuming you are using Express
// app.get('/api/products/most-selling/:name', async (req, res) => {
//   try {
//     const name = req.params.name;
//     const models = [FreeSchema, SmokinSchema];
//     let allProducts = [];

//     for (const Model of models) {
//       console.log(`Fetching data from model: ${Model.modelName}`);
//       const products = await Model.find({ name: new RegExp(name, 'i') }).sort({ sales: -1 }).limit(10).exec();
//       allProducts = allProducts.concat(products);
//     }

//     allProducts.sort((a, b) => b.sales - a.sales);
//     allProducts = allProducts.slice(0, 10);

//     if (allProducts.length === 0) {
//       return res.status(404).send('Product not found');
//     }

//     res.json(allProducts[0]); // Assuming you want the most relevant product
//   } catch (error) {
//     console.error('Error fetching most selling products:', error);
//     res.status(500).send('Server Error');
//   }
// });

app.get('/api/products/most-selling/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const models = [FreeSchema, SmokinSchema];
    let allProducts = [];

    for (const Model of models) {
      const regex = new RegExp(name.replace(/-/g, ' ').toLowerCase(), 'i'); // Convert formatted name back to matchable format
      const products = await Model.find({ name: regex }).sort({ sales: -1 }).limit(10).exec();
      allProducts = allProducts.concat(products);
    }

    allProducts.sort((a, b) => b.sales - a.sales);
    allProducts = allProducts.slice(0, 10);

    if (allProducts.length === 0) {
      return res.status(404).send('Product not found');
    }

    res.json(allProducts[0]); // Assuming you want the most relevant product
  } catch (error) {
    console.error('Error fetching most selling products:', error);
    res.status(500).send('Server Error');
  }
});



app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});


