const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 8;
let myData = [];

const generateGetDate = () => {
  let xhr = new XMLHttpRequest();
  //xhr.open("GET", "https://therese-backend.herokuapp.com/game", false);
  xhr.open("GET", "http://localhost:3001/game", false);
  xhr.send();
  let data = JSON.parse(xhr.response);
  myData = [];
  for (i = 0; i < 8; i++) {
    myData.push(data[i]);
    myData.push(data[i]);
  }
};

playerLivesCount.textContent = playerLives;

function getData() {
  return myData;
}

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Game over");
      }
    }
  }
  if (toggleCard.length === 16) {
    restart("You won!");
  }
};

const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
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
generateGetDate();
cardGenerator();
