import test from 'node:test'
import assert from 'assert'

import listen from 'test-listen'
import micro from 'micro'

import service from './index.js'

const it = test

it('should give a 200 OK response in the `/` path', async t => {
  const microService = micro(service)

  const testURL = await listen(microService)
  const res = await fetch(testURL)

  assert.strictEqual(res.status, 200)
  microService.close()
})

it('should output `Hello, world!` message in the `/` path', async (t) => {
  const microService = micro(service)

  const testURL = await listen(microService)
  const res = await fetch(testURL)
  const body = await res.text()

  assert.strictEqual(body, "Hello, world!")
  microService.close()
})

it('should output `hello {name}` on the `/?q={name}` URL', { todo: true })

it('should not accept other methods than `GET`', { todo: true })
it('should not accept empty `name` query param', { todo: true })
