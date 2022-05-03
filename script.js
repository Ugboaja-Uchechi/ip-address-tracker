async function fetchIpAddress() {
  const response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_m3M1l8QpxvtG9ih8CR732lDeUuxcv");
  const result = await response.json();
  console.log(result)
  // .then(response => response.json())
  // .then((data) => {
  //   console.log(data)
  // })
}

fetchIpAddress();
