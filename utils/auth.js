const auth = (req, res, next) => {
    //for user login 
    //if user tries to bypass login this
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
  }
};
  
module.exports = auth;