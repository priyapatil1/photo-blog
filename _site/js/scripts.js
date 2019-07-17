function createImageLink(fullImagePath) {
  lastPartOfPath = fullImagePath.split("/").pop()
  imageName = lastPartOfPath.split(".")[0]
  return "./" + imageName + ".html"
}

function findAlbumTitle(fullImagePath) {
  lastPartOfPath = fullImagePath.split("/").pop()
  imageName = lastPartOfPath.split(".")[0]
  var overlayTexts = document.getElementsByClassName("cover-photo")
  overlayTexts[0].innerHTML = imageName
}

