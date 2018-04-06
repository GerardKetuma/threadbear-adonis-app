'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('login', async () => 'GET /login')
Route.post('login', async () => 'POST /login')

Route.put('logout', async () => 'PUT /logout')

Route.get('register', async () => 'GET /register')
Route.post('register', async () => 'POST /register')

Route.get('forgot-password', async () => 'GET /forgot-password')
Route.post('forgot-password', async () => 'POST /forgot-password')

Route.get('reset-password/:token', async ({ params }) => `GET /reset-password ${params.token}`)
Route.post('reset-password/:token', async ({ params }) => `POST /reset-password ${params.token}`)

Route.get(':customer', async ({ params }) => `GET /:customer ${params.customer}`)
Route.put(':customer', async ({ params }) => `PUT /:customer ${params.customer}`)
Route.delete(':customer', async ({ params }) => `DELETE /:customer ${params.customer}`)

Route.get(':customer/products', async ({ params }) => `GET /:customer/products ${params.customer}`)
Route.post(
  ':customer/products',
  async ({ params }) => `POST /:customer/products ${params.customer}`,
)

Route.get(
  ':customer/:product',
  async ({ params }) => `GET /:customer/:product ${params.customer} ${params.product}`,
)

Route.put(
  ':customer/:product',
  async ({ params }) => `PUT /:customer/:product ${params.customer} ${params.product}`,
)

Route.delete(
  ':customer/:product',
  async ({ params }) => `DELETE /:customer/:product ${params.customer} ${params.product}`,
)
