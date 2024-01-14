const express = require("express")
const server = express()
const path = require("path")
const port = process.env.PORT

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

server.get("/paintings/:id", (req, res, next) => {
  let index = parseInt(req.params.id)
  start = true

  if (isNaN(index)) {
    next(new Error("Test error"))
    return
  }

  res.render("slideshow", {
    paintings: paintings,
    index: index,
    start: start
  })
})

// Handle 404 errors (Page Not Found)
server.use((req, res) => {
  res.status(404).send("Page Not Found")
})

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Internal Server Error")
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
