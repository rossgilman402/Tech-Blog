const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login')
    console.log('MIDELWEARTAFSAFAF')
  } else {
    next()
  }
}

module.exports = withAuth
