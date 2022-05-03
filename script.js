const list = document.querySelector('.list');

async function fetchIpAddress() {
  const response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_m3M1l8QpxvtG9ih8CR732lDeUuxcv");
  const result = await response.json();
  console.log(result)
  // .then(response => response.json())
  // .then((data) => {
  //   console.log(data)
  // })
  let display = '';
    display += `
    <span class="class="scores-span"">${result.ip}</span>
    <span class="class="scores-span"">${result.location.country}</span>
    <span class="class="scores-span"">${result.location.region}</span>
    <span class="class="scores-span"">${result.location.timezone}</span>
    <span class="class="scores-span"">${result.isp}</span>

    `;
    list.innerHTML = display;
    // list.appendChild(scoreInfo);

}

fetchIpAddress();
