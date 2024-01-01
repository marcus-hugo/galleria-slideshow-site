const cards = document.querySelectorAll(".card")

cards.forEach(card => {
  let link = card.childNodes[3].childNodes[1].childNodes[1]

  card.addEventListener("click", e => {
    console.log(e)
    if (link !== e.target) {
      link.click()
    }
  })
})
