"use strict";

class StudentController {
  async showProfile({ view, auth}) {
    // const studentProfile = await auth.user.student().fetch();

    // console.log({ studentProfile: studentProfile.toJSON() });

    return view.render("myprofile");
  }

  // create profile through forms
  async createProfile({ request, response, auth }) {
    const body = await request.all();

    const newStudent = await auth.user.student().create({
      name: body.name,
      year: body.year,
      bio: body.bio,
      fun_fact: body.fact,
      abroad: body.abroad,
      pre_law: body.pre_law,
      pre_med: body.pre_med,
      pre_dent: body.pre_dent,
      pre_eng: body.pre_eng
    });

    return response.redirect("/myprofile");
  }

//   // currently deletes by typed in id
//   async deleteProfile({ response, params }) {
//     const { id } = params;
//     const profile = await Student.find(id);

//     if (profile) {
//       await profile.delete();
//       return response.redirect("/profile");
//     }
//   }

  // edits profile

  async editProfile({ request, response, session, params, auth, view }) {
    // const { id } = params;
    // const profile = await Student.find(id);
    // const user = await User.find(3);
    // const studentProfile = await auth.user.student().fetch();

    // if (studentProfile) {
    //   return view.render("edit", { studentProfile });
    // }
    // const userProfile = await user.student().fetch()
    // console.log(userProfile)
    // console.log(userProfile);
    // if (profile) {
    //   await profile.delete();
    //   return response.render("edit-profile");
    // }

    return response.redirect("/");
  }

  async updateProfile({ request, response, session, params, auth }) {
    // const { id } = params;
    // const profile = await Student.find(id);
    // const user = await User.find(3);
    const studentProfile = await auth.user.student().fetch();

    const body = request.all();

    if (studentProfile) {
      studentProfile.name = body.name;
      studentProfile.year = body.year;
      studentProfile.abroad = body.abroad;
      studentProfile.bio = body.bio;
      studentProfile.pre_law = body.pre_law;
      studentProfile.pre_med = body.pre_med;
      studentProfile.pre_dent = body.pre_dent;
      studentProfile.pre_eng = body.pre_eng;

      await studentProfile.save();
      response.redirect("/profile");
    }
    // const userProfile = await user.student().fetch()
    // console.log(userProfile)
    // console.log(userProfile);
    // if (profile) {
    //   await profile.delete();
    //   return response.render("edit-profile");
    // }

    return response.redirect("/profile");
  }
}

module.exports = StudentController;
