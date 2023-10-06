const router = require('express').Router()
const { BlogPost, User } = require('../models')
const withAuth = require('../utils/auth')

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [{ model: User }],
    })

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

//Route for opening the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const BlogPostData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    })

    const posts = BlogPostData.map((post) => post.get({ plain: true }))
    console.log(posts)
    res.render('dashboard', {
      posts,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
