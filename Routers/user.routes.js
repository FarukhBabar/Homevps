// const express = require('express')
import express from 'express'
import { Register,  Login, Passwordresetrequest, verifyotp,deleteUser, updateUser,getAllUsers,ALLoders ,Deletoderuser,editoder } from '../Controller/Auth.js'
const router = express.Router()


router.post('/register-user' , Register )
router.post('/login' , Login)
router.post ('/request-reset-password' , Passwordresetrequest)
router.post('/verifyotp' , verifyotp)
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);  // Add delete route
router.put('/users/:id', updateUser);  // Add update route
router.get('/orderuserde', ALLoders);
router.put('/orderuserde/:id', editoder);
router.delete("/orderuserde/:id" , Deletoderuser )
export default  router