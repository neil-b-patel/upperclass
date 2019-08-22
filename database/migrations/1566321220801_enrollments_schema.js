'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnrollmentsSchema extends Schema {
  up () {
    this.create('enrollments', (table) => {
      table.increments();
      table.integer("student_id");
      table.string("department")
      table.string("CRN")
      table.string("name")
      table.integer("semester_taken");
      table.string("professor")
      table.timestamps();
    })
  }

  down () {
    this.drop('enrollments')
  }
}

module.exports = EnrollmentsSchema
