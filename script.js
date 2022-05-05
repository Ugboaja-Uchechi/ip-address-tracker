const apiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_EYvak5yT6eY9Gz5EFqX6WwYv7a3Dv";
const input = document.querySelector('#ip-address');
const button = document.querySelector('.fa-solid');
// Leaflet
// Making a marker with a custom icon

const myIcon = L.icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [38, 45],
  iconAnchor: [25, 16],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

// The first value in the Array is the latitude, the second value is the longitutude and after that we have the zoom level.
//Making a map and tiles
let map = L.map('map').setView([51.50853, -0.12574], 15);
const leafletMarker = L.marker([0,0], {icon: myIcon}).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGlyZWRjb2RlciIsImEiOiJjbDJydXlxN2QwZmJpM2JydDluaGxlbHJhIn0.w2ZcCE7WMLqWA6Hw4QLXpQ'
}).addTo(map);

// API Function

async function fetchIpAddress() {
  const response = await fetch(apiUrl);
  const result = await response.json();
  const { ip, isp } = result;
  // L.marker([result.location.lat, result.location.lng]).addTo(map);
  document.querySelector('#ip').textContent = ip;
  document.querySelector('#isp').textContent = isp;
  document.querySelector('#location').textContent += result.location.city + ", ";
  document.querySelector('#location').textContent += result.location.country;
  document.querySelector('#location').textContent += result.location.postalCode;
  document.querySelector('#timezone').textContent += result.location.timezone;
  leafletMarker.setLatLng([result.location.lat, result.location.lng],{alt: 'Marker'});
}

fetchIpAddress();

const postIpAddress = () => {
  const data = async (IPvalue) => {
    const url = `${apiUrl}&ipAddress=${IPvalue}`
    const get = await fetch(url)
    const response = await get.json()
    return response
  }
  button.addEventListener('click', async (e) => {
    e.preventDefault()
    const IPvalue = input.value;
    const { ip,  location: { city, country, postalCode, timezone, lat, lng }, isp } = await data(IPvalue)
  
    document.querySelector('#ip').textContent = ip;
    document.querySelector('#isp').textContent = isp;
    document.querySelector('#location').textContent += `${city} , ${country} ${postalCode}`;
    document.querySelector('#timezone').textContent += `${timezone}`;
    leafletMarker.setLatLng([lat, lng],{alt: 'Marker'});
    console.log(leafletMarker)
    // L.marker.setLatLng([lat, lng]).addTo(map);
  })
}

postIpAddress()
