"use strict";

class StudentController {
  async show({ view, auth }) {
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

    const demographic = await newStudent.demographic().create({
      gender: body.gender,
      first_gen: body.first_gen,
      race: body.race,
      athlete: body.athlete
    });

    return response.redirect("/myprofile");
  }

  async edit({ request, response, session, params, auth, view }) {
    const studentProfile = await auth.user.student().fetch();
    const demographic = await studentProfile.demographic().fetch();

    if (studentProfile) {
      return view.render("profile.edit", { studentProfile, demographic });
    }

    return response.redirect("/signup");
  }

  async update({ request, response, auth }) {
    const studentProfile = await auth.user.student().fetch();
    const demographic = await studentProfile.demographic().fetch();
    const body = request.all();

    if (studentProfile) {
      studentProfile.first_name = body.first_name;
      studentProfile.last_name = body.last_name;
      studentProfile.year = body.year;

      // demographic.major = body.major;
      // update does not work for database
      demographic.gender = body.gender;
      demographic.race = body.race;
      demographic.first_gen = body.first_gen;
      demographic.athlete = body.athlete;

      studentProfile.bio = body.bio;
      studentProfile.fun_fact = body.fun_fact;
      studentProfile.abroad = body.abroad;
      studentProfile.pre_law = body.pre_law;
      studentProfile.pre_med = body.pre_med;
      studentProfile.pre_dent = body.pre_dent;
      studentProfile.pre_eng = body.pre_eng;

      await studentProfile.save();
      await demographic.save();
      response.redirect("/myprofile");
    }
  }
}

module.exports = StudentController;
