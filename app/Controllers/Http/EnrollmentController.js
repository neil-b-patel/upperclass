"use strict";

class EnrollmentController {
  async index({ view, auth}) {
    const studentProfile = await auth.user.student().fetch();
    const classes = await studentProfile.enrollment().fetch();

    return view.render("profile.courses.index", {
      studentProfile: studentProfile.toJSON(),
      classes: classes.toJSON()
    });
  }
}

module.exports = EnrollmentController;
