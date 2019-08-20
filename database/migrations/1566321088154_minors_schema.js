"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MinorsSchema extends Schema {
  up() {
    this.create("minors", table => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("minors");
  }
}

module.exports = MinorsSchema;
