"use strict";

class LandingController {
  async index({ view, auth }) {
    try {
      let myProfile = await auth.user.student().fetch();
      return view.render("landing", { myProfile: myProfile.user_id });
    } catch (error) {
      return view.render("landing");
    }
  }
}

module.exports = LandingController;
