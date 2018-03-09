/*
Game Plan:

1. Create an array of words.
    a. These words will be used in the hangman game for users to guess.

2. Create an array of the letters of the alphabet.

3. Make the website accept keyboard input.

4. Do the following steps until game over or success.

5. Whenever the user enters a letter of the alphabet,
    a. Convert the letter to lowercase.
    b. Compare the letter to the letters of the word array
        i. We will most likely need to use the charAt() method.

    6. If the input matches the first letter of the word
        a. Letter appears on screen
        b. # of tries goes down by 1.

    7. If the input doesn't match the first letter of the word
        a. Go to next letter of the word.

    8. Do step 5 and 6 for all the letters of the word.

    9. If the input doesn't match any of the letters of the word, 
        a. Letter appears in "used letter" section.
        b. Hangman body part drawn.
        c. # of tries goes down by 1.

10. If user guessed all letters of word correctly,
    a. User wins.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.

11. If # of tries = 0,
    a. Game over.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.




*/

var easyWords = ["car", "bird", "coffee", "bottle", "shirt", "html"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {


    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var pressedKey = String.fromCharCode(event.which).toLowerCase();




















}