'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/api', function * (request, response) {
    yield response.json({ name: 'doe' })
  })

Route.any('*', function * (request, response) {
  yield response.sendView('home')
})
