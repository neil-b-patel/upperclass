"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MajorsSchema extends Schema {
  up() {
    this.create("majors", table => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("majors");
  }
}

module.exports = MajorsSchema;
