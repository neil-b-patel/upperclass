"use strict";

const Student = use("App/Models/Student");

class ExploreController {
  async index({ view, auth }) {
    const profiles = await Student.all();
    let myProfile = await auth.user.student().fetch();
    // console.log("this is logged-in id: ", myProfile.user_id);

    // const otherStudents = studentProfiles.filter(d => d.age > 37);

    // console.log({ studentProfiles: studentProfiles.toJSON() });

    return view.render("explore", {
      profiles: profiles.toJSON(),
      myProfile: myProfile.user_id
    });
  }
}

module.exports = ExploreController;
