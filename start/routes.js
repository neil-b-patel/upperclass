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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.on('/explore').render('explore')
Route.on('/profiletemplate').render('profiletemplate')
Route.on('/prac').render('prac')
Route.on('/profile').render('profile')
Route.on('/login').render('login')
Route.on('/signup').render('signup')
Route.on('/logout').render('logout')
Route.on('/about').render('about')
Route.on('/myprofile').render('myprofile')
