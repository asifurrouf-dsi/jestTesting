/* eslint-env jest */

// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock('../request')

const github = require('../github')

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('asifurrouf-dsi')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.login).toEqual('asifurrouf-dsi')
    })
  })
})

// The exact same test using async/await
describe('#getUser() using async/await', () => {
  it('should load user data', async () => {
    const data = await github.getUser('asifurrouf-dsi')
    expect(data).toBeDefined()
    expect(data.entity.login).toEqual('asifurrouf-dsi')
  })
})
