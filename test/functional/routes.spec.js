'use strict'

const { test, trait } = use('Test/Suite')('Routes')

trait('Test/ApiClient')

test('GET /login', async ({ client }) => {
  const response = await client.get('login').end()
  response.assertStatus(200)
  response.assertText('GET /login')
})

test('POST /login', async ({ client }) => {
  const response = await client.post('login').end()
  response.assertStatus(200)
  response.assertText('POST /login')
})

test('PUT /logout', async ({ client }) => {
  const response = await client.put('logout').end()
  response.assertStatus(200)
  response.assertText('PUT /logout')
})

test('GET /register', async ({ client }) => {
  const response = await client.get('register').end()
  response.assertStatus(200)
  response.assertText('GET /register')
})

test('POST /register', async ({ client }) => {
  const response = await client.post('register').end()
  response.assertStatus(200)
  response.assertText('POST /register')
})

test('GET /forgot-password', async ({ client }) => {
  const response = await client.get('forgot-password').end()
  response.assertStatus(200)
  response.assertText('GET /forgot-password')
})

test('POST /forgot-password', async ({ client }) => {
  const response = await client.post('forgot-password').end()
  response.assertStatus(200)
  response.assertText('POST /forgot-password')
})

test('GET /reset-password', async ({ client }) => {
  const response = await client.get('reset-password/token123').end()
  response.assertStatus(200)
  response.assertText('GET /reset-password token123')
})

test('POST /reset-password', async ({ client }) => {
  const response = await client.post('reset-password/token123').end()
  response.assertStatus(200)
  response.assertText('POST /reset-password token123')
})

test('GET /:customer', async ({ client }) => {
  const response = await client.get('assertChris').end()
  response.assertStatus(200)
  response.assertText('GET /:customer assertChris')
})

test('PUT /:customer', async ({ client }) => {
  const response = await client.put('assertChris').end()
  response.assertStatus(200)
  response.assertText('PUT /:customer assertChris')
})

test('DELETE /:customer', async ({ client }) => {
  const response = await client.delete('assertChris').end()
  response.assertStatus(200)
  response.assertText('DELETE /:customer assertChris')
})

test('GET /:customer/products', async ({ client }) => {
  const response = await client.get('assertChris/products').end()
  response.assertStatus(200)
  response.assertText('GET /:customer/products assertChris')
})

test('POST /:customer/products', async ({ client }) => {
  const response = await client.post('assertChris/products').end()
  response.assertStatus(200)
  response.assertText('POST /:customer/products assertChris')
})

test('GET /:customer/:product', async ({ client }) => {
  const response = await client.get('assertChris/handbag').end()
  response.assertStatus(200)
  response.assertText('GET /:customer/:product assertChris handbag')
})

test('PUT /:customer/:product', async ({ client }) => {
  const response = await client.put('assertChris/handbag').end()
  response.assertStatus(200)
  response.assertText('PUT /:customer/:product assertChris handbag')
})

test('DELETE /:customer/:product', async ({ client }) => {
  const response = await client.delete('assertChris/handbag').end()
  response.assertStatus(200)
  response.assertText('DELETE /:customer/:product assertChris handbag')
})
