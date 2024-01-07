const progressBar = document.querySelector(".progress-bar")
let unit = 6.666
let pathName = window.location.pathname
let length = pathName.replace(/\D/g, "")
length++

progressBar.style.width = `${length * unit}%`
