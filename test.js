import test from 'node:test'
import assert from 'assert'
import { URL } from 'url'

import listen from 'test-listen'
import micro from 'micro'

import service from './index.js'

const it = test

const fetchService = async (path = '/') => {
  const microService = micro(service)
  try {
    const testURL = new URL(path, await listen(microService))
    const res = await fetch(testURL.toString())
    return res
  } finally {
    microService.close()
  }
}

it('should give a 200 OK response in the `/` path', async t => {
  const res = await fetchService()
  assert.strictEqual(res.status, 200)
})

it('should output `Hello, world!` message in the `/` path', async (t) => {
  const res = await fetchService()
  const body = await res.text()
  assert.strictEqual(body, "Hello, world!")
})

it('should output `hello {name}` on the `/?name={name}` URL', async (t) => {
  const res = await fetchService("/?name=Felipe")
  const body = await res.text()
  assert.strictEqual(body, "Hello, Felipe!")
})

it('should not accept other methods than `GET`', { todo: true })
it('should not accept empty `name` query param', { todo: true })
