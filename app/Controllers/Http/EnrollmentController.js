"use strict";

const Enrollment = use("App/Models/Enrollment");

class EnrollmentController {
  async index({ view }) {
    const classes = await Enrollment.all();

    return view.render("profile.courses.index", { classes: classes.toJSON() });
  }
}

module.exports = EnrollmentController;
