# Memory Game (JavaScript)

## Overview
This is a simple **Memory Game** built with **HTML**, **CSS**, and **JavaScript**. The game consists of pairs of cards that are placed face down, and the goal is to match the pairs. The game ends when all pairs are matched, and a congratulatory message is shown.

## Features:
- Cards are shuffled randomly at the start of the game.
- The user clicks on cards to reveal their symbols.
- Matched cards remain face-up.
- A congratulatory message is displayed when all pairs are matched.
- The game can be restarted by clicking a "Play Again" button.

## Technologies Used:
- **HTML** - Used to structure the page and display elements.
- **CSS** - Used for styling the game, cards, and the winning message.
- **JavaScript** - Used for the game logic, DOM manipulation, and handling user interactions.

## DOM Manipulation:
This game heavily utilizes **DOM manipulation** to handle the interaction between the user and the game board. Here are some key DOM manipulation operations:

### 1. **Creating and Shuffling Cards**
   - Cards are dynamically created using `document.createElement()`. Each card is assigned a symbol and an event listener that allows the user to click on the card to flip it over.
   - The cards are shuffled using the `.sort()` method in combination with `Math.random()` to randomize their positions on the board.

### 2. **Showing and Hiding Symbols**
   - When the game starts, the symbols on the cards are briefly revealed for a few seconds using `setTimeout()` to give players a chance to memorize the cards. After that, the symbols are hidden again.
   - The symbols are shown and hidden by changing the `innerHTML` of each card element.

### 3. **Card Flipping**
   - Each card has an event listener attached to it that triggers a function to "flip" the card when clicked. The `classList` is used to add a class that visually indicates the card has been flipped.
   - The state of the card (flipped or not) is controlled by adding/removing the `flipped` class.

### 4. **Matching Cards**
   - When two cards are flipped, their symbols are compared. If they match, a `matched` class is added to both cards, indicating that they are correctly paired.
   - If the cards don't match, they are flipped back after a short delay (using `setTimeout()`).

### 5. **Winning Condition**
   - After each match, the game checks if all the cards have been matched. If so, a "Congratulations" message is displayed, indicating the user has won the game.
   - The number of matched cards is tracked using `document.querySelectorAll(".matched")`.

### 6. **Restarting the Game**
   - A "Play Again" button allows the user to restart the game, reshuffling the cards and resetting the game state. The `innerHTML` of the cards is reset, and the congratulatory message is hidden when the game restarts.

## How to Play:
1. The game starts with cards placed face down.
2. Click on a card to flip it over and reveal its symbol.
3. Try to match pairs of cards with the same symbol.
4. The game ends when all pairs are matched, and a "Congratulations" message will appear.
5. You can restart the game by clicking the "Play Again" button.
