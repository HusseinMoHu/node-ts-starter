import express from 'express'
import mainRouter from './main.routes'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(mainRouter)

app.listen(3000, () => {
  console.log('App listening on port 3000')
})








// import _ from 'lodash'
// import { Request, Response, NextFunction } from 'express'


// const middleware = ({ name }: { name: string }) => (req: Request, res: Response, next: NextFunction) => {
//   res.locals.name = name

//   next()
// }

// app.use(middleware({ name: 'Hussein' }))

// app.get('/', (req: Request, res: Response, _next: NextFunction) => {
//   console.log(res.locals.name)
//   res.send(`Hello ${res.locals.name}`)
// })

// app.get('/api/:userId/:bookId', (req: Request<{ userId: string; bookId: string }, {}, { name: string; age: number }, {}>, res: Response, _next: NextFunction) => {
//   // logged in user
//   console.log("logged in user >>", res.locals.name)

//   // Query Params
//   console.log("param userId >>", req.params.userId)
//   console.log("param bookId >>", req.params.bookId)

//   // Body
//   console.log("body name >>", req.body.name)
//   console.log("body age >>", req.body.age)

//   res.send(`Hello ${res.locals.name}`)
// })