"use strict";

class StudentController {
  async show({ view, auth }) {
    // const studentProfile = await auth.user.student().fetch();

    // console.log({ studentProfile: studentProfile.toJSON() });

    return view.render("profile.create");
  }

  // create profile through forms
  async create({ request, response, auth }) {
    const body = await request.all();

    const newStudent = await auth.user.student().create({
      first_name: body.first_name,
      last_name: body.last_name,
      year: body.year,
      bio: body.bio,
      fun_fact: body.fun_fact,
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

  async edit({ request, response, session, params, auth, view }) {
    // const { id } = params;
    // const profile = await Student.find(id);
    // const user = await User.find(3);
    const studentProfile = await auth.user.student().fetch();

    if (studentProfile) {
      return view.render("profile.edit", { studentProfile });
    }
    // const userProfile = await user.student().fetch()
    // console.log(userProfile)
    // console.log(userProfile);
    // if (profile) {
    //   await profile.delete();
    //   return response.render("edit-profile");
    // }

    return response.redirect("/signup");
  }

  async update({ request, response, auth }) {
    const studentProfile = await auth.user.student().fetch();

    const body = request.all();

    if (studentProfile) {
      studentProfile.first_name = body.first_name;
      studentProfile.last_name = body.last_name;
      studentProfile.year = body.year;
      studentProfile.bio = body.bio;
      studentProfile.fun_fact = body.fun_fact;
      studentProfile.abroad = body.abroad;
      studentProfile.pre_law = body.pre_law;
      studentProfile.pre_med = body.pre_med;
      studentProfile.pre_dent = body.pre_dent;
      studentProfile.pre_eng = body.pre_eng;

      await studentProfile.save();
      response.redirect("/myprofile");
    }
  }
}

module.exports = StudentController;
