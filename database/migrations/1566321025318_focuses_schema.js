"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FocusesSchema extends Schema {
  up() {
    this.create("focuses", table => {
      table.increments();
      table.integer("student_id");
      table.integer("majors1_id");
      table.integer("majors2_id");
      table.integer("minors1_id");
      table.integer("minors2_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("focuses");
  }
}

module.exports = FocusesSchema;
