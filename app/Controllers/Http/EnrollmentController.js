"use strict";

class EnrollmentController {
  async index({ view, auth }) {
    const studentProfile = await auth.user.student().fetch();
    return view.render("profile.courses.create", {
      studentProfile: studentProfile.toJSON()
    });
  }

  async create({ request, response, auth }) {
    const studentProfile = await auth.user.student().fetch();
    const body = await request.all();

    const enrollment = await studentProfile.enrollment().create({
      department: body.department,
      CRN: body.CRN,
      name: body.name,
      semester_taken: body.semester_taken,
      professor: body.professor
    });

    return response.redirect("/myprofile/courses");
  }

  async edit({ response, auth, view }) {
    const studentProfile = await auth.user.student().fetch();
    let enrollments = await studentProfile.enrollment().fetch();

    if (studentProfile) {
      return view.render("profile.courses.index", {
        studentProfile,
        enrollments: enrollments.toJSON()
      });
    }

    return response.redirect("/signup");
  }

  async update({ request, response, auth }) {
    const studentProfile = await auth.user.student().fetch();
    const enrollment = await studentProfile.enrollment().fetch();
    const body = request.all();

    // console.log(enrollment);

    if (studentProfile) {
      if (enrollment) {
        enrollment.department = body.department;
        enrollment.CRN = body.CRN;
        enrollment.name = body.name;
        enrollment.semester_taken = body.semester_taken;
        enrollment.professor = body.professor;
        await enrollment.save();
      }

      response.redirect("/myprofile/courses");
    }
  }
}

module.exports = EnrollmentController;
