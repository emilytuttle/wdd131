// year = document.createElement('span')
// year.textContent = new Date(currentYear)
// currentYear = document.getElementById("currentyear")
// currentYear.appendChild(year)


// last = document.createElement('span')
// lastModif = new Date(document.lastModified);
// last = document.getElementById("lastModified")
// last.appendChild(lastModif)

const d = new Date()

let year = d.getFullYear()
let lastModif = new Date(document.lastModified);


let currentYear = document.getElementById("currentyear")
currentYear.textContent = year

let last = document.getElementById("lastModified")
last.textContent = lastModif