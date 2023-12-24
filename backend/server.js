const express = require("express")
const server = express()
const path = require("path")
const port = 3000

// Middleware
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, "public")))
server.use(express.json())

server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "views"))

// Routes
server.get("/", (req, res) => {
  //   res.send("this is the home page!")
  res.render("home")
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
