function updateTime() {
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");

  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonTime = moment().tz("America/New_York");

  bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
