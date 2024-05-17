const d = new Date()
let year = d.getFullYear()
let lastModif = new Date(document.lastModified);
let currentYear = document.getElementById("currentyear")
currentYear.textContent = year
let last = document.getElementById("lastModified")
last.textContent = lastModif




const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const header = document.querySelector('.header')
const title = document.querySelector('.title')

hambutton.addEventListener('click', function() {
    mainnav.classList.toggle('show')
    mainnav.classList.toggle('shown')
    hambutton.classList.toggle('show')
    header.classList.toggle('shown')
    title.classList.toggle('gone')
})


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      dedicationYear: 2005,
      area: 11500,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/320%2C/0/default"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      dedicationYear: 1888,
      area: 74792,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/320%2C/0/default"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      dedicationYear: 2015,
      area: 96630,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/595590aa805080f86e63368963860d9f3dfb3bfd/full/320%2C/0/default"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      dedicationYear: 2020,
      area: 6861,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/9f541175bcfc11eca77eeeeeac1ea52488fbff2f/full/320%2C/0/default"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      dedicationYear: 1974,
      area: 156558,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/9bbc2a18ee4b11eb90efeeeeac1e68824aabff60/full/320%2C/0/default"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      dedicationYear: 1986,
      area: 9600,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/b800f5245ce311fb987aabd6ee6b2230b7c8b04f/full/320%2C/0/default"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      dedicationYear: 1983,
      area: 116642,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/320%2C/0/default"
    },
    {
        templeName: "Barranquilla Colombia Temple",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December 9",
        dedicationYear: 2018,
        area: 25349,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/7e68e3b2ed30f817f91392968737f45a07e17e79/full/320%2C/0/default"
      },
      {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June 15",
        dedicationYear: 2000,
        area: 10700,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/3b4ee51a2376f977c61ad1d351d6729d12c10581/full/320%2C/0/default"
      },
      {
        templeName: "Copenhagen Denmark Temple",
        location: "Frederiksberg, Hovedstaden, Denmark",
        dedicated: "2004, May 23",
        dedicationYear: 2004,
        area: 25000,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/320%2C/0/default"
      }
    
  ];
  

const displayContainer = document.getElementById('container')


function displayTemples() {
    
        for (let i=0; i < temples.length; i++) {
            const templeCard = document.createElement('div')
            templeCard.classList.add('temple-card')
            templeCard.innerHTML = `
            <h2 class="temple-title">${temples[i].templeName}</h2>
            <div class="temple-info">
                <p id="location"><span class="tag">Location: </span>${temples[i].location}</p>
                <p id="dedication"><span class="tag">Dedicated: </span>${temples[i].dedicated}</p>
                <p id="area"><span class="tag">Size: </span>${temples[i].area} sq ft</p>
            </div>
            <img id="temple-image" alt="${temples[i].templeName}" loading="lazy" src="${temples[i].imageUrl}">
           
            `
            displayContainer.appendChild(templeCard)
        }
}

displayTemples()

function filteredTemples(filter) {
    
    for (let i=0; i < filter.length; i++) {
        const templeCard = document.createElement('div')
        templeCard.classList.add('temple-card')
        templeCard.innerHTML = `
        <h2 class="temple-title">${filter[i].templeName}</h2>
        <div class="temple-info">
            <p id="location"><span class="tag">Location: </span>${filter[i].location}</p>
            <p id="dedication"><span class="tag">Dedicated: </span>${filter[i].dedicated}</p>
            <p id="area"><span class="tag">Size: </span>${filter[i].area} sq ft</p>
        </div>
        <img id="temple-image" alt="${filter[i].templeName}" loading="lazy" src="${filter[i].imageUrl}">
       
        `
        displayContainer.appendChild(templeCard)
    }
}



const mainButton = document.getElementById('home-button')
const oldButton = document.getElementById('old-button')
const newButton = document.getElementById('new-button')
const largeButton = document.getElementById('large-button')
const smallButton = document.getElementById('small-button')


mainButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    displayTemples()
})

oldButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    filteredTemples(temples.filter((temple) => temple.dedicationYear < 1900) )
    console.log(temples.filter((temple) => temple.dedicationYear < 1900))
})

newButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    filteredTemples(temples.filter((temple) => temple.dedicationYear > 2000) )
    console.log(temples.filter((temple) => temple.dedicationYear > 2000))
})

largeButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    filteredTemples(temples.filter((temple) => temple.area > 90000) )
    console.log(temples.filter((temple) => temple.area > 90000))
})

smallButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    filteredTemples(temples.filter((temple) => temple.area < 10000) )
    console.log(temples.filter((temple) => temple.area < 10000))
})


