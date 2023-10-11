const router = require('express').Router()
const { Comment, User } = require('../../models')

//POST /api/comments/
router.post('/:id', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      blogpost_id: req.params.id,
      user_id: req.session.user_id,
    })

    const findUser = await User.findByPk(req.session.user_id)

    res.status(200).json({ commentData, findUser })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
