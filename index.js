import { send } from 'micro'

export default (_, res) => {
  send(res, 200, "Hello, world!")
}