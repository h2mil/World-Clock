function updateTime() {
  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");

    zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
    zurichTimeElement.innerHTML = zurichTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  let bostonElement = document.querySelector("#boston");
  if (bostonElement) {
    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
    bostonTimeElement.innerHTML = bostonTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  let vladivostokElement = document.querySelector("#vladivostok");
  if (vladivostokElement) {
    let vladivostokDateElement = vladivostokElement.querySelector(".date");
    let vladivostokTimeElement = vladivostokElement.querySelector(".time");
    let vladivostokTime = moment().tz("Asia/Vladivostok");

    vladivostokDateElement.innerHTML = vladivostokTime.format("MMMM Do YYYY");
    vladivostokTimeElement.innerHTML = vladivostokTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">
            ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
          </div>
        </div>
        <a href="index.html" id="back-to-cities">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
