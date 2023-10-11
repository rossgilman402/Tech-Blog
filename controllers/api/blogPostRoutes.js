const router = require('express').Router()
const { BlogPost } = require('../../models')
const withAuth = require('../../utils/auth')

//api/blogPost/
router.post('/', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.create({
      title: req.body.title,
      comment: req.body.comment,
      date: req.body.date,
      user_id: req.session.user_id,
    })

    res.status(200).json(blogPostData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

//DELETE //api//blogPost/id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const post = BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(post)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//EDIT /api/blogPost/id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogPost = BlogPost.update(req.body, {
      where: { id: req.params.id },
    })
    res.status(200).json(blogPost)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
