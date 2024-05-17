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
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia Temple",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December 9",
        area: 25349,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/1280x800/2-Barranquilla-Columblia-Temple-2135201.jpg"
      },
      {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June 15",
        area: 10700,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/3b4ee51a2376f977c61ad1d351d6729d12c10581/full/320%2C/0/default"
      },
      {
        templeName: "Copenhagen Denmark Temple",
        location: "Frederiksberg, Hovedstaden, Denmark",
        dedicated: "2004, May 23",
        area: 25000,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/320%2C/0/default"
      }
    
  ];
  

const displayContainer = document.getElementById('container')


function displayAll() {
    
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

displayAll()