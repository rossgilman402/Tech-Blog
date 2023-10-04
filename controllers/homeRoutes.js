const router = require('express').Router()
const { BlogPost } = require('../models')
const withAuth = require('../utils/auth')

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({})

    const BlogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }))

    console.log(BlogPosts)
    res.render('homepage', {
      BlogPosts,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage

  if (req.session.loggedIn) {
    console.log('REDIRECT TO LOGIN PAGE')
    res.redirect('/')
    return
  }

  res.render('login')
})

module.exports = router
