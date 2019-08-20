'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartmentsSchema extends Schema {
  up () {
    this.create('departments', (table) => {
      table.increments();
      table.string("classes");
      table.timestamps();
    })
  }

  down () {
    this.drop('departments')
  }
}

module.exports = DepartmentsSchema
