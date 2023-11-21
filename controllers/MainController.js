exports.getMainPage = (req, res) => {

  const username = req.session.username;

  if (!username) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "",
    });
  }
  
  res.render("main", {
    pageTitle: "Main Page",
    logoImg: "/assets/jam-logo.png",
    userName: username,
  });
}