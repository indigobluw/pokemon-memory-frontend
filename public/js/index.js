/*console.log("Hej på dig")
var anElementet = document.getElementById("app")

//appElementet.innerHTML="Hello World"
//appElementet.outerHTML="Hello World"

var anElement = document.createElement("h1")
appElementet.appendChild(ettElement)
var app = document.getElementById("app")
app.appendChild(an)

setTimeout(age, 3000)

function age() { 
    console.log("Ageing game")
    setTimeout(age, 3000)
}
age()

function age() {
    var xhr = new XMLHttpRequest()
    //xhr.open("GET", "/js/data.json") 
    xhr.open("GET", "http://localhost:3000")
    xhr.onload=function() { 
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data) { 
    var appElementet = document.getElementById("app")
    var aTable = document.createElement("table")
    appElementet.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points, data[0].logo))
    aTable.appendChild(createRow(data[1].name, data[1].points, data[1].logo))
    aTable.appendChild(createRow(data[2].name, data[2].points, data[2].logo))
    aTable.appendChild(createRow(data[3].name, data[3].points, data[3].logo))
}

function createRow(name, points, url) { 
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    aRow.appendChild(createCells(url))

    return aRow
}

function createCell(content){ 
    var aCell = document.createElement("td") 
    aCell.innerHTML = content 
    return aCell;
}
function createImageCell(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("tableLogo")
    aCell.appendChild(anImage)
    return aCell;
}*/

const section = document.querySelector("section"); 
const playerLivesCount = document.querySelector("span"); 
let playerLives = 8; //how many tries the player's got 

//link text
playerLivesCount.textContent = playerLives;

//generate the data for the cards. [{}] = array of objects
const getData = () => [
    {
        imgSrc: "./image/chikorita.png",
        name: "chikorita"
    },
    { 
        imgSrc: "./image/dragonite.png",
        name: "dragonite"
    },
    {
        imgSrc:"./image/eevee.png",
        name: "eevee"
    },
    {
        imgSrc:"./image/groudon.png",
        name: "groudon"
    },
    {
        imgSrc:"./image/gyrados.png",
        name: "gyrados"
    },
    {
        imgSrc:"./image/lugia.png",
        name: "lugia"
    },
    {
        imgSrc:"./image/metagross.png",
        name: "metagross"
    },
    {
        imgSrc:"./image/milotic.png",
        name: "milotic"
    },
    {
        imgSrc: "./image/chikorita.png",
        name: "chikorita"
    },
    { 
        imgSrc: "./image/dragonite.png",
        name: "dragonite"
    },
    {
        imgSrc:"./image/eevee.png",
        name: "eevee"
    },
    {
        imgSrc:"./image/groudon.png",
        name: "groudon"
    },
    {
        imgSrc:"./image/gyrados.png",
        name: "gyrados"
    },
    {
        imgSrc:"./image/lugia.png",
        name: "lugia"
    },
    {
        imgSrc:"./image/metagross.png",
        name: "metagross"
    },
    {
        imgSrc:"./image/milotic.png",
        name: "milotic"
    }
];

// => arrow function
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    //console.log(cardData); 
    return cardData;
};

const cardGenerator = () => { 
    const cardData = randomize(); 
    cardData.forEach((item) => { //loop så den fixar koden för alla kort
        //console.log(item);
        //console.log(cardData);
        const card = document.createElement("div"); 
        const face = document.createElement("img"); 
        const back = document.createElement("div"); 
        card.classList = "card"; 
        face.classList = "face"; 
        back.classList = "back"; 

        face.src = item.imgSrc;  
        card.setAttribute("name", item.name)

        section.appendChild(card); 
        card.appendChild(face); 
        card.appendChild(back);

        card.addEventListener('click', (e) => { 
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });  
};

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target; 
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        }
        else {
            console.log("no match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--; 
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) { 
                restart("No more lives, try again");
            }
        }
    }
    if(toggleCard.length === 16) {
        restart("Congratulations, you won!");
    }
};

const restart = (text) => { 
    let cardData = randomize(); 
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout (() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives; 
    setTimeout(() => {
        window.alert(text, 100);
    });
};

cardGenerator();