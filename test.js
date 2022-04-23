import test from 'node:test'

const it = test

it('should give a 200 OK response', { todo: true })
it('should output `hello world` message in the `/` path', { todo: true })
it('should output `hello {name}` on the `/?q={name}` URL', { todo: true })

it('should not accept other methods than `GET`', { todo: true })
it('should not accept empty `name` query param', { todo: true })
