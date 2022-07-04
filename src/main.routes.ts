import express from 'express'
const router = express.Router()

import usersRouter from './users/users.route'
// import ordersRouter from './orders/orders.route'
// import productsRouter from './products/products.route'


router.use('/users', usersRouter)
// router.use('/orders', ordersRouter)
// router.use('/products', productsRouter)

export default router