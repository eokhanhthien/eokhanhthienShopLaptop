import React, { Component } from 'react';
import "./CarouselsCSS.css"

class Carousels extends Component {
    componentDidMount  = () => {
        const carousels = document.querySelector(".carousels");
const navigatorWrap = document.querySelector(".navigator");
let currentPage = 0;
let animationInProgress = false;

const cards = [
  {
    image: "./image/lap1.jpg",
    title: "Laptop Dell Inspiron",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap2.jpg",
    title: "Laptop Dell Vostro",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap3.jpg",
    title: "Apple Macbook Air 2017",
    subtitle: "MAC OS"
  },
  {
    image: "./image/lap4.jpg",
    title: "Macbook Pro 2017",
    subtitle: "MAC OS"
  },
  {
    image: "./image/lap5.jpg",
    title: "HP ProBook 440 G3",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap6.jpg",
    title: "HP Envy",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap7.jpg",
    title: "Lenovo ThinkPad T470",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap8.jpg",
    title: "Lenovo IdeaPad Y520",
    subtitle: "WIN 10"
  },
  {
    image: "./image/lap9.jpg",
    title: "Macbook Pro 2017 13.3 Inch",
    subtitle: "MAC OS"
  },
  {
    image: "./image/lap10.jpg",
    title: "Macbook Pro 2017",
    subtitle: "MAC OS"
  },
  {
    image: "./image/lap13.jpg",
    title: "DELL 7749",
    subtitle: "WIN 10"
  },
];

function InitializeCards() {
  carousels.innerHTML = cards
    .map(card => {
      return `
    <div className="card">
      <img className="card-image" src="${card.image}" alt="${card.title}" />
      <div className="card-bottom">
        <div className="card-title">${card.title}</div>
        <div className="card-subtitle">${card.subtitle}</div>
      </div>
    </div>
    `;
    })
    .join("");
}

function setCurrentPage(page) {
  if (animationInProgress) return;
  animationInProgress = true;
  const navigatorButtons = navigatorWrap.querySelectorAll(
    ".navigator-button > div"
  );

  const navigatorActive = navigatorWrap.querySelectorAll(
    ".navigator-button > div"
  );

  for (let active of navigatorActive) {
    active.style.display = "none";
  }

  navigatorButtons[page].style.display = "";

  const cards = document.querySelectorAll(".card");
  const cardWidth = 350 * 3;
  const currentPosition = cardWidth * currentPage;
  const nextPosition = cardWidth * page;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    // console.log(i, currentPosition);
    const player = card.animate(
      [
        { transform: `translateX(-${currentPosition}px)` },
        { transform: `translateX(-${nextPosition}px)` }
      ],
      500
    );
    player.addEventListener("finish", function() {
      card.style.transform = `translateX(-${nextPosition}px)`;
      animationInProgress = false;
    });
  }
  currentPage = page;
}

function initializeNavigator() {
  let pageCount = parseInt(cards.length / 3, 10);
  if (pageCount === 0) pageCount = 1;

  let buttons = [];

  for (let i = 0; i < pageCount; i++) {
    buttons.push(
      `
    <div class="navigator-button" data-page="${i}">
      <div></div>
    </div>
    `
    );
  }

  navigatorWrap.innerHTML = buttons.join("");

  const navigatorButtons = navigatorWrap.querySelectorAll(".navigator-button");

  for (let button of navigatorButtons) {
    button.addEventListener("click", e => {
      setCurrentPage(e.target.dataset.page);
    });
  }
}

InitializeCards();
initializeNavigator();
setCurrentPage(0);

    }
    render() {
        return (
            <div className="container_carousels">
            <div className="carousels"></div>
            <div className="navigator"></div>
          </div>
        );
    }
}

export default Carousels;