
const imagesLoaded = require("imagesloaded");
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(
      document.querySelectorAll('div'),
      { background: true },
      resolve
    )
  })
}

export default preloadImages
