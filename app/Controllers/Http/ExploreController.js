"use strict";

const Student = use("App/Models/Student")

class ExploreController {
  async index({ view }) {
    const studentProfiles = await Student.all()

    console.log({ studentProfiles: studentProfiles.toJSON() });

    return view.render("explore", { studentProfiles: studentProfiles.toJSON() });
  }
}

module.exports = ExploreController;
