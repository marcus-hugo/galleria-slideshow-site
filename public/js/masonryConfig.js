const elem = document.querySelector(".grid")

const msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 20,
  gutter: 20,
  horizontalOrder: true,
  percentPosition: false,
  fitWidth: true,
  transitionDuration: 0
})
