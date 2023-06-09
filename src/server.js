import express from 'express'
import renderer from './helpers/renderer'

const app = express()

const port = process.env.PORT || 3001

app.use(express.static('dist'))

app.get('/', (req, res) => {
  const content = renderer(req)
  res.send(content)
});

app.get('/other', (req, res) => {
  const content = renderer(req)
  res.send(content)
});

app.use('/html', express.static(__dirname + '/html'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
