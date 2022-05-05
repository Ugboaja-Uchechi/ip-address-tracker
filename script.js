const apiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_8GrODFm4uQ2JYOzdS0GVX7GP6rL5d";
const input = document.querySelector('#ip-address');
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
  const { ip } = result;
  // L.marker([result.location.lat, result.location.lng]).addTo(map);
  leafletMarker.setLatLng([result.location.lat, result.location.lng],{alt: 'Marker'});
  input.addEventListener('change', async (e) => {
    e.preventDefault();
    const userName = input.value;
  
    if (userName !== '') {
      leafletMarker.setLatLng([result.location.lat, result.location.lng],{alt: 'Marker'});
    }
 console.log('push')
  });
  document.querySelector('#ip').textContent = ip;
  console.log(result)
}

fetchIpAddress();


  // const postIpAddress = async (ipaddress) => {
  //   const resp = await fetch(apiUrl, {
  
  //     method: 'POST',
  //     mode: 'no-cors',
  //     body: { ip: userName },
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  
  //   const userData = await resp.json();
  
  //   return userData;
  // };

  // input.addEventListener('change', async (e) => {
  //   e.preventDefault();
  //   const userName = input.value;
  //   // fetch("apiUrl, {
  
  //   //   method: 'GET',
  //   //   mode: 'no-cors',
  //   //   headers: {
  //   //     'Content-type': 'application/json',
  //   //   }
  //   // })
  //   // .then(function (response) {
  //   //   return response.json()
  //   // })
  //   // .then(function (data) {
  //   //   console.log(data)
  //   // })
  
  //   if (userName !== '') {
  //     await fetchIpAddress()
  //   }
  
  //   // // loadToDom();
  //   // input.value = '';
  //   // console.log('post')
  // });

// postIpAddress();
