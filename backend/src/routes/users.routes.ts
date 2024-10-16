import express from 'express'
import { UsersController } from '../controllers/users.controller';

export const router = express.Router()

router.post('/create', UsersController.createUser);
router.get('/', UsersController.getAllUsers);
router.get('/:id', UsersController.getUserById);
router.put('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);
router.get('/:id/role', UsersController.getUserRole);