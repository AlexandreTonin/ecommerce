import express from 'express'
import { AuthController } from '../controllers/auth.controller'

export const router = express.Router()

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);
router.post('/logout', AuthController.logout);
router.get('/me', AuthController.userLogged);