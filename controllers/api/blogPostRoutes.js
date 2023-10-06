const router = require('express').Router()
const { BlogPost } = require('../../models')
const withAuth = require('../../utils/auth')

//api//blogPost/

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

module.exports = router
