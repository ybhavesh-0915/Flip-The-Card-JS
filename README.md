# 🃏 Flip the Card - Memory Game

A fun memory-based card flipping game built using vanilla JavaScript, HTML, and CSS. The game features **10 levels** with increasing difficulty and limited moves. Match all card pairs before your moves run out!
[live preview](https://ybhavesh-0915.github.io/Flip-The-Card-JS/) 

## ✨ Features

- 🎮 10 Progressive Levels
- 🔢 Moves counter for each level
- 🧠 Memory-based gameplay
- 🎉 Confetti animation on winning
- ⚙️ Responsive grid layout
- 💡 Auto-resets or goes to next level

## 🚀 How to Play

1. Click on any two cards to flip them.
2. Match pairs of cards with the same emoji.
3. Finish all pairs within the limited number of moves.
4. Win the level and move to the next one.
5. Game ends if you run out of moves.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Project Structure

```

index.html
style.css
script.js
README.md
LICENSE

```

## 🧠 Logic Highlights

- Cards are shuffled using the Fisher-Yates algorithm.
- Grid adjusts based on level and screen size.
- Level-based emoji pairing from a fixed emoji pool.
- Flip animation with delayed match checking.
- Win condition checks after every valid pair.
  
## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE)

---

## 🙌 Acknowledgements

- Emojis from Unicode
- Confetti animation via `confetti()` function (assumes you are using a library or custom implementation)

## ✍️ Author

Created by **Bhavesh Yadav** — [GitHub Profile](https://github.com/ybhavesh-0915)
