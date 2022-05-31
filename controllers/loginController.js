const signupView = (req, res) => {
    res.render("signup", {
    });
}

const loginView = (req, res) => {
    res.render("login", {
    });
}
module.exports = {
    signupView,
    loginView
};