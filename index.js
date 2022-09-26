require("dotenv").config()

const express = require("express")
const cors = require("cors")

const postRoutes = require("./routes/post.routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/", postRoutes)

const port = process.env.PORT || 7000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})