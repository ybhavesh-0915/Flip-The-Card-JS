"use strict"
let level = 1;
let totalMoves = level < 3 ? 6 * level : 9 * level
let point = 0
let cardInfo = [];
const cardWrapper = document.querySelector(".cards-wrapper");
const levelLabel = document.querySelector(".level")

let card

let updateGridCols = () => {
    let column = (level > 1) ? level : level * 2
    cardWrapper.style.gridTemplateColumns = `repeat(${column}, auto)`
    if (cardWrapper.offsetWidth > window.innerWidth) {
        column = Math.max(1, Math.floor((window.innerWidth - 80) / 155))
        cardWrapper.style.gridTemplateColumns = `repeat(${column}, auto)`
    }
}
updateGridCols();
window.addEventListener("resize", updateGridCols);

const allEmojis = [
    "🍎", "🍇", "🍉", "🍌", "🍍", "🍓", "🍒", "🥝", "🌶️", "🥕",
    "🍭", "🍩", "🍪", "🍰", "🧁", "🎈", "🎉", "🐶", "🐱", "🐰"
];

function generateSuffleCard() {
    let getEmoji = []
    for (let i = 0; i < level * 2; i++) {
        getEmoji.push(allEmojis[i])
    }
    getEmoji = [...getEmoji, ...getEmoji]

    // Fisher-Yates algorithm unbaised suffle
    for (let i = getEmoji.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = getEmoji[i];
        getEmoji[i] = getEmoji[j];
        getEmoji[j] = temp;
    }
    console.log(getEmoji);

    let cardFragment = document.createDocumentFragment()
    for (let i = 0; i < getEmoji.length; i++) {
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.setAttribute("onclick", `cardFlipping(this,${i})`)
        cardDiv.innerHTML = `<div class="upper-face"></div><div class="lower-face" >${getEmoji[i]}</div>`
        cardFragment.appendChild(cardDiv)
    }
    cardWrapper.appendChild(cardFragment)
    card = document.querySelectorAll(".card");
}
generateSuffleCard()

function cardFlipping(ele, id) {
    if (cardInfo.length != 2) {
        if (cardInfo[0] !== id && !ele.classList.contains("flip")) {
            ele.classList.add("flip")
            cardInfo.push(id)
            totalMoves--
            updateMoves()
        }

        if (cardInfo.length === 2) {
            setTimeout(() => {
                if (card[cardInfo[0]].innerHTML !== card[cardInfo[1]].innerHTML) {
                    card[cardInfo[0]].classList.remove("flip")
                    card[cardInfo[1]].classList.remove("flip")
                } else {
                    ++point
                    card[cardInfo[0]].onclick = null;
                    card[cardInfo[1]].onclick = null;
                }
                cardInfo = []
                checkWin()
            }, 700)
        }
    }
}


function updateMoves() {
    const remainMoves = document.querySelector(".remain-moves");
    remainMoves.innerText = `Moves: ${totalMoves}`
}
updateMoves()

const nextLevelBtn = document.querySelector(".next-Level-Btn")
const resetBtn = document.querySelector(".reset-Btn")
function checkWin() {
    if (totalMoves >= 0 && point == level * 2) {
        nextLevelBtn.classList.add("active")
        confetti({
            angle: randomInRange(90, 90),
            spread: randomInRange(500, 700),
            particleCount: randomInRange(5000, 10000),
            origin: { y: 0.6 },
        });
    }
    if (totalMoves == 0 && point < level * 2) {
        const card = document.querySelectorAll(".card");

        card.forEach((ele) => {
            ele.onclick = null
        })
        resetBtn.classList.add("active")
    }

}

function NextLevel() {
    if (level < 10) {
        level = level + 1
        cardWrapper.innerHTML = ""
        generateSuffleCard()
        totalMoves = level < 3 ? 6 * level : 9 * level
        point = 0
        updateMoves()
        updateGridCols()
        levelLabel.innerText = `Level ${level}`

    }
    nextLevelBtn.classList.remove("active")
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}