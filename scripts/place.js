const d = new Date()
let year = d.getFullYear()
let lastModif = new Date(document.lastModified);
let currentYear = document.getElementById("currentyear")
currentYear.textContent = year
let last = document.getElementById("lastModified")
last.textContent = lastModif


const windchill = document.querySelector('#wind-chill')

temperature = 25

farenheight = ((9/5)*temperature) + 32
windchillNumber = 0

function calculateWindChill(temperature, windspeed) {
    chill = 35.74 + (0.6215*temperature) - 35.75*(Math.pow(windspeed, 0.16)) + 0.4275*temperature*(Math.pow(windspeed, 0.16))
    return chill
}

windchillNumber = calculateWindChill(25, 16)


if (temperature <= 10 && windspeed > 4.8) {
    windchill.textContent = (calculateWindChill(25, 16)).toFixed(2)
}
else {
    windchill.textContent = "N/A"
}



