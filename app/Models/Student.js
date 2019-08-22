"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Student extends Model {
  demographic() {
    return this.hasOne("App/Models/Demographic");
  }

  enrollment() {
    return this.hasMany("App/Models/Enrollment");
  }
}

module.exports = Student;
