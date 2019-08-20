"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DemographicsSchema extends Schema {
  up() {
    this.create("demographics", table => {
      table.increments();
      table.integer("student_id");
      table.string("gender");
      table.string("race");
      table.boolean("first_gen");
      table.boolean("athlete");
      table.timestamps();
    });
  }

  down() {
    this.drop("demographics");
  }
}

module.exports = DemographicsSchema;
