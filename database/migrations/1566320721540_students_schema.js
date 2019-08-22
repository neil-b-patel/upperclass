"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StudentsSchema extends Schema {
  up() {
    this.create("students", table => {
      table.increments();
      table.string("user_id");
      table.string("first_name");
      table.string("last_name");
      table.integer("year");
      table.string("major");
      table.string("college");
      table.string("abroad");
      table.string("fun_fact");
      table.string("bio");
      table.boolean("pre_law");
      table.boolean("pre_med");
      table.boolean("pre_dent");
      table.boolean("pre_eng");
      table.timestamps();
    });
  }

  down() {
    this.drop("students");
  }
}

module.exports = StudentsSchema;
