import { send } from 'micro'
import { URL } from 'url'

export default (req, res) => {
  const baseURL = `http://${req.headers.host}/`;
  const { searchParams } = new URL(req.url, baseURL)
  const name = searchParams.get("name")

  if (name) {
    return send(res, 200, `Hello, ${name}!`)
  }

  send(res, 200, "Hello, world!")
}