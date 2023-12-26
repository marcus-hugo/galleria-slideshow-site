const express = require("express")
const server = express()
const path = require("path")
const port = 3000

const paintings = require("./paintings.js")

// Middleware
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, "public")))
server.use(express.json())

server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "views"))

// Routes
server.get("/", (req, res) => {
  res.render("home", {
    paintings: paintings
  })
})

server.get("/starrynights", (req, res) => {
  res.render("slideshow", {
    painting: paintings[0]
  })
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
