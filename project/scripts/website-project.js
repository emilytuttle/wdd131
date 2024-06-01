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



const displayContainer = document.getElementById('container')
const climbList = [
    {
        climbName: "The Angler",
        location: "Joe's Valley",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/111099847_medium_1494339973_topo.jpg?cache=1704547158",
        moreInfo: 'https://www.mountainproject.com/route/105880426/the-angler'
    },
    {
        climbName: "Dry Spunk",
        location: "Maple Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/107846529_medium_1494215147.jpg?cache=1597362517",
        moreInfo: 'https://www.mountainproject.com/route/106004012/dry-spunk'
    },
    {
        climbName: "The Lie Back",
        location: "Spring Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/118844152_medium_1588961519.jpg?cache=1702073697",
        moreInfo: 'https://www.mountainproject.com/route/106424618/the-lieback'
    },
    {
        climbName: "Ostertag",
        location: "Huntington Canyon",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121784132_medium_1639835431.jpg?cache=1640190904",
        moreInfo: 'https://www.mountainproject.com/route/121785240/ostertag'
    },
    {
        climbName: "Mels Prob",
        location: "Huntington Canyon",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121784373_medium_1639843950.jpg?cache=1640190996",
        moreInfo: 'https://www.mountainproject.com/route/121784333/mels-prob'
    },
    {
        climbName: "Left of Coats",
        location: "Huntington Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/120273163_medium_1612746369.jpg?cache=1612802130",
        moreInfo: 'https://www.mountainproject.com/route/120270146/left-of-coats'
    },
    {
        climbName: "Left of Coats",
        location: "Huntington Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/120273163_medium_1612746369.jpg?cache=1612802130",
        moreInfo: 'https://www.mountainproject.com/route/120270146/left-of-coats'
    },
    {
        climbName: "Twig and Berries",
        location: "Salt Creek Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121490079_medium_1634571685_topo.jpg?cache=1634743102",
        moreInfo: 'https://www.mountainproject.com/route/109639591/twig-and-berries'
    },
    {
        climbName: "Twig and Berries",
        location: "Salt Creek Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121490079_medium_1634571685_topo.jpg?cache=1634743102",
        moreInfo: 'https://www.mountainproject.com/route/109639591/twig-and-berries'
    },
    {
        climbName: "Wind Walker",
        location: "Uinta Mountains",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/114570135_medium_1531099598.jpg?cache=1702073064",
        moreInfo: 'https://www.mountainproject.com/route/106011932/wind-walker'
    },
    {
        climbName: "Sweet Lady J",
        location: "Uinta Mountains",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/119616293_medium_1600976252.jpg?cache=1605727720",
        moreInfo: 'https://www.mountainproject.com/route/119616261/sweet-lady-j'
    },
    {
        climbName: "Sweet Lady J",
        location: "Uinta Mountains",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/119616293_medium_1600976252.jpg?cache=1605727720",
        moreInfo: 'https://www.mountainproject.com/route/119616261/sweet-lady-j'
    },
    {
        climbName: "Barn Door",
        location: "Flaming Gorge",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/113460660_medium_1502586123_topo.jpg?cache=1597432601",
        moreInfo: 'https://www.mountainproject.com/route/113460639/barn-door'
    }
]


function filteredClimbs(filter) {
    
    for (let i=0; i < filter.length; i++) {
        const climbCard = document.createElement('div')
        climbCard.classList.add('climb-card')
        climbCard.innerHTML = `
        <h2 class="climb-name">${filter[i].climbName}</h2>
        <div class="climb-info">
            <p id="location"><span class="tag">Location: </span>${filter[i].location}</p>
            <p id="type"><span class="tag">Climb Type: </span>${filter[i].climbType}</p>
            <p>For more information click <a href="${filter[i].moreInfo}" target="blank">here</a></p>
        </div>
        <img id="climb-image" alt="${filter[i].climbName}" loading="lazy" src="${filter[i].imageUrl}">
       
        `
        displayContainer.appendChild(climbCard)
    }
}



const mainButton = document.getElementById('home-button')
const topRopeButton = document.getElementById('top-rope-button')
const leadButton = document.getElementById('lead-button')
const boulderingButton = document.getElementById('bouldering-button')

const pageHeader = document.getElementById('page-header')
const heroImage = document.getElementById('hero')
const infoBox = document.getElementById('info-box')

function main() {
    displayContainer.innerHTML = ''
    pageHeader.innerHTML = 'Home'
    infoBox.innerHTML = `
    <p class="info-box">There are multiple kinds of rock climbing, including top rope, lead, bouldering, and more. Climbing can seem intimidating to beginners, but there are ways to prevent accidents and stay safe. Many people begin their rock climbing journey in a climbing gym. Climbing gyms often have many of the kinds of climbing. Otherwise, people can climb outside for a whole new experience!</p>
    `
    heroImage.src = 'https://www.rei.com/dam/rinckenberger_111815_1406_main_lg_web_med.jpeg'
}

const answers = [
    {
      id: 'internet-search',
      name: "Internet Search"
    },
    {
      id: 'friend',
      name: "Friend"
    },
    {
      id: 'family',
      name: "Family"
    },
    {
      id: 'climbing-gym',
      name: "Climbing Gym Staff"
    },
    {
      id: 'other-climber',
      name: "Other Climber"
    }
  ];
  let dropdown = document.getElementById('how-select')

function dropdownList() {
    
    for (let i=0; i < answers.length; i++) {
        const dropdownItem = document.createElement('option')
        let object = answers[i]
        dropdownItem.textContent = object.name
        dropdownItem.id = object.id
        dropdown.appendChild(dropdownItem)
    }
}

dropdownList()


mainButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    pageHeader.innerHTML = 'Home'
    heroImage.src = 'https://www.rei.com/dam/rinckenberger_111815_1406_main_lg_web_med.jpeg'
    infoBox.innerHTML = `
    <p class="info-box">There are multiple kinds of rock climbing, including top rope, lead, bouldering, and more. Climbing can seem intimidating to beginners, but there are ways to prevent accidents and stay safe. Many people begin their rock climbing journey in a climbing gym. Climbing gyms often have many of the kinds of climbing. Otherwise, people can climb outside for a whole new experience!  Below are some routes in Utah.</p>
    `
    
})

topRopeButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    pageHeader.innerHTML = 'Top Rope Climbing'
    heroImage.src = 'https://www.rei.com/dam/harnois_062216_0742_main_lg.jpg'
    infoBox.innerHTML = `
    <p class="info-box">In top rope climbing, the rope goes through a fixed anchor at the top of a route. These anchors are placed permanently the majority of the time. Climbers need to bring a rope more than twice as long as the route, as the rope goes up, through the anchor, and back down. One end of the rope is attached to the climber, and the other stays on the ground, part of it being used by a belayer. Top rope is generally considered a safe form of climbing, as climbers can't take large falls if the belayer does their job correctly and takes out slack as the climber goes up.  Below are some routes in Utah. </p>
    `
    filteredClimbs(climbList.filter((climb) => climb.climbType == "Top Rope") )
})

leadButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    pageHeader.innerHTML = 'Lead Climbing'
    heroImage.src = 'https://rockclimbingcentral.com/wp-content/uploads/2019/07/rock-climbing-2-1357408-1279x852-1024x683.jpg'
    infoBox.innerHTML = `
    <p class="info-box">In lead climbing, climbers bring their own quickdraws to place on bolts along the route. As the climber goes up the way, they bring the rope and anchors with them, placing them along the way. Some people lead climb and then change to top rope for other members of their groups to climb. Belayers are necessary in lead climbing.  Below are some routes in Utah. </p>
    `
    filteredClimbs(climbList.filter((climb) => climb.climbType == "Lead") )
})

boulderingButton.addEventListener('click', function() {
    displayContainer.innerHTML = ''
    pageHeader.innerHTML = 'Bouldering'
    heroImage.src = 'https://media.cntraveler.com/photos/5f30886e01aedaf2771c6399/16:9/w_2560%2Cc_limit/Bouldering-GettyImages-1199646674.jpg'
    infoBox.innerHTML = `
    <p class="info-box">Bouldering is a kind of climbing that doesn't require a rope, harness or belayer, but usually requires crash pads, or thick mats to fall on. Some people climb over water instead of crash pads, but either way the idea is to have something beneath you that won't hurt you when you fall on it. Bouldering routes are much shorter than most lead or top rope routes. A lot of bouldering routes are more dynamic and take a lot of power, as opposed to the combined strength and increased endurance necessary for longer climbs. </p>
    `
    filteredClimbs(climbList.filter((climb) => climb.climbType == "Bouldering") )
})




main()