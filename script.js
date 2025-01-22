const express = require('express')
const app = express()
const port = 3000
const postRouter = require('./routers/post.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

app.use('/post', postRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})