async function changeColor() {
  // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
  // 2. Use that color to update the background color of the body.
  fetch("https://geo.ipify.org/api/v2/country?apiKey=at_m3M1l8QpxvtG9ih8CR732lDeUuxcv")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })
}

changeColor();
