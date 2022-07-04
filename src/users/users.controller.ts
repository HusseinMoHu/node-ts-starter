import express, { Request, Response, NextFunction } from 'express'

// @route: /users/login
export const loginController = async (req: Request, res: Response, _next: NextFunction) => {
  console.log(req.body)
  res.send('Hello from "/login" endpoint')
}
