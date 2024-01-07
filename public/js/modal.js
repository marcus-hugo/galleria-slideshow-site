const dialog = document.querySelector(".dialog")
const showButton = document.querySelector(".slide__img-view-btn")
const closeButton = document.querySelector(".close-modal")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close()
})
