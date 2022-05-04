const list = document.querySelector('.list');
const apiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_m3M1l8QpxvtG9ih8CR732lDeUuxcv";

// The first value in the Array is the latitude, the second value is the longitutude and after that we have the zoom level.
let map = L.map('map').setView([51.50853, -0.12574], 13);
const leafletMarker = L.marker([result.location.lat, result.location.lng]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGlyZWRjb2RlciIsImEiOiJjbDJydXlxN2QwZmJpM2JydDluaGxlbHJhIn0.w2ZcCE7WMLqWA6Hw4QLXpQ'
}).addTo(map);

async function fetchIpAddress() {
  const response = await fetch(apiUrl);
  const result = await response.json();
  const { ip } = result
  // L.marker([result.location.lat, result.location.lng]).addTo(map);
  document.querySelector('#ip').textContent = ip;
  console.log(result)

  // Alternate way of writing it

  // let display = '';
  //   display += `
  //   <span>${result.ip}</span>
  //   <span>${result.location.city}</span>
  //   <span>${result.location.country}</span>
  //   <span>${result.location.timezone}</span>
  //   <span>${result.isp}</span>

  //   `;
  //   list.innerHTML = display;

}

fetchIpAddress();
