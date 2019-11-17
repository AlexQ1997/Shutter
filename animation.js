const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {

  let delay = 0.25

  animatedTags.forEach(tag => {
    //Will check to see if items are in the window
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    }
    if (tagBottom > window.innerHeight) {
      tag.style.animation = `fadein 1s ${delay}s both`
    }

  })
}

fadeIn()

document.addEventLisenter("scroll", function () {
  fadeIn()
})


window.addEventLisenter("resize", function () {
  fadeIn()
})
