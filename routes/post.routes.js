const { Router } = require("express")
const PostService = require("../services/post.service.js")

const router = Router()
const postService = new PostService()

router.post("/post", async (req, res) => {
  if (!req.body) {
    res.json({
      status: "bad",
      msg: "req.body not found."
    })
  }

  const { title, content } = req.body

  const data = await postService.create(title, content)

  if (!data) {
    res.json({
      status: "bad",
      msg: "Something went wrong!"
    })
  }

  res.json({
    status: "ok",
    msg: "Successfully created!",
    data: data
  })
})

router.get("/post", async (req, res) => {
  const data = await postService.getAll()

  if (!data) {
    res.json({
      status: "bad",
      msg: "Something went wrong!"
    })
  }

  res.json({
    status: "ok",
    msg: "All contents retrived.",
    data: data
  })
})

router.delete("/post/:id", async (req, res) => {
  if (!req.params.id) {
    res.json({
      status: "bad",
      msg: "Id not provided."
    })
  }

  const id = +req.params.id

  const data = await postService.delete(id)

  if (!data) {
    res.json({
      status: "bad",
      msg: "Something went wrong!"
    })
  }

  res.json({
    status: "ok",
    msg: "Content successfully deleted.",
    data: data
  })
})

router.put("/post/:id", async (req, res) => {
  if (!req.params.id) {
    res.json({
      status: "bad",
      msg: "Id not provided."
    })
  }

  const id = +req.params.id
  const { title, content } = req.body

  const data = await postService.update(id, title, content)

  if (!data) {
    res.json({
      status: "bad",
      msg: "Something went wrong!"
    })
  }

  res.json({
    status: "ok",
    msg: "Content successfully updated.",
    data: data
  })
})

module.exports = router