import { Hono } from 'hono'
import loader from './loader'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/loader', loader);

export default app
