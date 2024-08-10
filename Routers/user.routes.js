// const express = require('express')
import express from 'express'
import { Register,  Login, Passwordresetrequest, verifyotp,deleteUser, updateUser,getAllUsers,ALLoders ,Deletoderuser } from '../Controller/Auth.js'
import Odersch from '../config/Odersch.js'
const router = express.Router()


router.post('/register-user' , Register )
router.post('/login' , Login)
router.post ('/request-reset-password' , Passwordresetrequest)
router.post('/verifyotp' , verifyotp)
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);  // Add delete route
router.put('/users/:id', updateUser);  // Add update route
router.get('/orderuserde', ALLoders);
router.delete("/orderuserde/:id" , Deletoderuser )

 // Adjust the path as needed

// Update order
router.put('/orderuserde/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Odersch.findOneAndUpdate(
      { _id: id }, // Ensure this is an object with `_id` as the key
      req.body,
      { new: true }
    );
    if (!updatedOrder) return res.status(404).send('Order not found');
    res.json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).send('Server error');
  }
});
// Get order by ID
router.get('/orderuserde/:id', async (req, res) => {
  try {
    const { id } = req.params; // Use `id` to match route parameter
    const order = await Odersch.findOne({ _id: id }); // Use `Order` model
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).send('Server error');
  }
});



export default  router