const express = require("express")
const server = express()
const path = require("path")
const port = 3000

const paintings = require("./paintings.js")
let start

// Middleware
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, "public")))
server.use(express.json())

server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "views"))

// Routes
server.get("/", (req, res) => {
  start = false

  res.render("home", {
    paintings: paintings,
    start: start
  })
})

server.get("/paintings/:id", (req, res) => {
  let index = parseInt(req.params.id)
  start = true

  res.render("slideshow", {
    paintings: paintings,
    index: index,
    start: start
  })
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
