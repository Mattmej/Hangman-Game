/*
Game Plan:

1. Create an array of words.                                                                                (o)
    a. These words will be used in the hangman game for users to guess.

2. Create an array of the letters of the alphabet.                                                          (o)

3. Make the website accept keyboard input.                                                                  (o)

4. Have the website select a word from the array.                                                           (o)

5. Do the following steps until game over or success.   

6. Whenever the user enters a letter of the alphabet,
    a. Convert the letter to lowercase.                                                                     (o)
    b. Compare the letter to the letters of the word array
        i. We will most likely need to use the charAt() method.

    7. If the input matches the first letter of the word
        a. Letter appears on screen
        b. # of tries goes down by 1.

    8. If the input doesn't match the first letter of the word
        a. Go to next letter of the word.

    9. Do step 5 and 6 for all the letters of the word.

    10. If the input doesn't match any of the letters of the word, 
        a. Letter appears in "used letter" section.
        b. Hangman body part drawn.
        c. # of tries goes down by 1.

11. If user guessed all letters of word correctly,
    a. User wins.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.

12. If # of tries = 0,
    a. Game over.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.

13. ...but what if the user DOESN'T enter a letter of the alphabet?
    a. User gets a prompt saying "Enter a letter of the alphabet!"




*/

// random number between 0 and the array length:
// Math.floor((Math.random() * array.length))

var easyWords = ["car", "bird", "coffee", "bottle", "shirt", "html"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// This variable will select a random word in the easyWords array.
var currentWord =  easyWords[Math.floor((Math.random()* easyWords.length))];

var wordSlot = [];
// var wordSlot2 = [];
var wordDisplay = [];

for (j = 0; j < currentWord.length; j++) {
    // wordSlot.push(currentWord.charAt(j));       // Will hold the letters of the word for display on the page
    wordSlot.push(currentWord.charAt(j));      // Will hold the letters. Will remove elements as user guesses them. [works correctly]
}

console.log(wordSlot);
var tries = 10;
var gameOver = false;


// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {


    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var pressedKey = String.fromCharCode(event.which).toLowerCase();
    console.log(pressedKey);

    if (alphabet.includes(pressedKey)) {        // what happens when the pressed key is an element of the alphabet array

        for (i = 0; i < currentWord.length; i++) {

            if (pressedKey === currentWord.charAt(i)) {         // if the pressed key is included in the word
                /* # display letter in the correct slot on the screen
                    1. Will create row with a # of columns that equals the number of letters in the selected word.
                    2. Whenever the pressed key is included, the letter will appear in one of the row's columns.
                */
                tries--;    // number of tries goes down by 1.
                wordDisplay.splice(i, 0, pressedKey);   // adds the pressed key to the wordDisplay array
                console.log(wordDisplay);








            }
        }

        


/*

Example of loop:

currentWord = "bottle"

        for (i = 0; i < currentWord.length; i++) {      // currentWord.length = 6
            if (pressedKey === currentWord.charAt(i)) {     // so, if user selects "o." o = currentWord.charAt(1)



            }
        }




*/





    }




















}