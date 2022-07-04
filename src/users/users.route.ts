import express from 'express'
import { loginController } from './users.controller';

const router = express.Router()

router.get('/login', loginController)

export default router;