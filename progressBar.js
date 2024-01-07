const paintings = require("./paintings.js")

module.exports = function () {
  const progressBar = document.querySelector("progress-bar")
  let unit = 7.142
  let length

  for (let i = 0; i < paintings.length; i++) {
    length = i * unit
    progressBar.style.length = length + "%"
  }
}
