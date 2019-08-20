'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnrollmentsSchema extends Schema {
  up () {
    this.create('enrollments', (table) => {
      table.increments();
      table.integer("student_id");
      table.integer("classes_departments_id");
      table.integer("semester_taken");
      table.timestamps();
    })
  }

  down () {
    this.drop('enrollments')
  }
}

module.exports = EnrollmentsSchema
