import express, { Request, Response } from 'express'
import path from 'path'
import serveStatic from 'serve-static'

const app = express()

const pa = path.join(__dirname, '../../', 'dist')
app.use(serveStatic(pa))

app.get('*', (req: Request, res: Response) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening at https://localhost:${port}`))
