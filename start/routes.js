"use strict";

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
const Route = use("Route");

// landing page
Route.on("/").render("landing");

// explore page
Route.on("/explore").render("explore");

// profile page
Route.on("/profile").render("profile.show");

// login page
Route.on("/login").render("auth.login");
Route.post("/login", "UserController.login").validator("LoginUser");

// signup page
Route.on("/signup").render("auth.signup");
Route.post("/signup", "UserController.create").validator("CreateUser");

// logout page
Route.get("/logout", async ({ auth, response }) => {
  await auth.logout();
  return response.redirect("/");
});

// about page
Route.on("/about").render("about");

// myprofile page
Route.get("/myprofile", "ProfileController.show");

// testing routes
Route.get("/myprofile/create", "StudentController.show");
Route.post("/myprofile/create", "StudentController.create");
Route.get("/myprofile/edit", "StudentController.edit");
Route.post("/myprofile/edit", "StudentController.update");
// Route.get("/profile/delete/:id", "TestController.deleteProfile");
