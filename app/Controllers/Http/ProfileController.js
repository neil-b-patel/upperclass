'use strict'

class ProfileController {
    async show({ request, response, session, params, auth, view }) {    
        const studentProfile = await auth.user.student().fetch();
        const demographic = await studentProfile.demographic().fetch();
        
         
        if (studentProfile) {
          return view.render("profile.show", { studentProfile, demographic });
        }
    
       
      }
}

module.exports = ProfileController
