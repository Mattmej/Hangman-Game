/*
Game Plan:

1. Create an array of words.                                                                            (in progress)
    a. These words will be used in the hangman game for users to guess.
    b. Easy mode array                                                                                      (o)
    c. Normal mode
    d. Hard mode

2. Create an array of the letters of the alphabet.                                                          (o)

3. Create a variable that stores the number of tries                                                    (in progress)
    a. If the currentWord has less than 6 letters, 
        then the # of tries will be 10.
    b. If the currentWord has 6 or more letters,
        then the # of tries will be the # of letters in the word
        multiplied by 2.

4. Make the website accept keyboard input.                                                                  (o)

5. Have the website select a word from the array.                                                           (o)

6. Do the following steps until game over or success.   

7. Whenever the user enters a letter of the alphabet,
    a. Convert the letter to lowercase.                                                                     (o)
    b. Compare the letter to the letters of the word array                                                  (o)
        i. We will most likely need to use the charAt() method.

    8. If the input matches the first letter of the word
        a. Letter appears on screen                                                                         (o)
        b. # of tries goes down by 1.                                                                       (o)

    9. If the input doesn't match the first letter of the word
        a. Go to next letter of the word.                                                                   (0)

    10. Do step 5 and 6 for all the letters of the word.                                                    (o)

    11. If the input doesn't match any of the letters of the word, 
        a. Letter appears in "used letter" section.                                                         (o)
        b. Hangman body part drawn.
        c. # of tries goes down by 1.                                                                       (o)

12. If user guessed all letters of word correctly,
    a. User wins.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.

13. If # of tries = 0,
    a. Game over.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.
    c. Maybe a function can be created.

14. ...but what if the user DOESN'T enter a letter of the alphabet?                                         (o)
    a. User gets a prompt saying "Enter a letter of the alphabet!"



///////////////////////////////////////////////////////////////////////////////////////

Troubleshooting

1. Problem: Attempts to push into empty "wordDisplay" array 
    a. Issue: Pushing into an empty array causes the elements to be out of order at first.
                If all the correct letters are guessed, then all the wordDisplay elements are in the proper order.
        i.  if (pressedKey === currentWord.charAt(i)) {         // if the pressed key is included in the word
                wordDisplay.splice(i, 0, pressedKey);   // adds the pressed key to the wordDisplay array}
    b. Attempt 1: Initialize an empty array (with 0's as elements) with the word's length via a "for" loop.
        i. Result: Success!
    c. Attempt 2: Same as (b), but with empty strings in place of 0's.
        i. Result: Success!

2. Problem: Displaying wordDisplay array to screen
    a. Issue: Number of times user input is displayed to screen is limited by the link
                of the current word.
    b. Attempt 1: Reorder loops and if/else statements so that the if/else is on the outside
                    and contains the for loops. The statements displaying the word to the page
                    will be inside the if/else statements and outside of the for loop.
        i. Result: Failure. Had to roll back to before attempt.
        ii. In the re-ordering, the variable "i" was not yet defined.
    c. Attempt 2: Create function for comparing user entry to current word letters. This will potentially make the code easier to manage.
        i. Result: Success!
    d. Attempt 3: Create a double "for" loop. One loop will go through the number of remaining tries, the other will compare the user's
                    entry to the letters of the current word.
        i. Result: untried.
    e. Root of problem: incrementing # of tries
        i. Was put inside of the "for" loop, causing the number of tries to go down the same number of times
            as the loop ran.

3. Problem: Displaying guessedLetters array to screen
    a. Issue: Multiple copies of the guessed letter appear on the screen. Only one is supposed to appear.
    b. Attempt 1: Change position or expression of the guessedLetters array
        i. Result: Success!
    c. Root of problem: Every time the user's letter looped through the string and found no matching letter,
                        the letter was stored in the guessedLetters array.
        i. e.g. if the length of the current word is 5 letters long (e.g. "apple"), then the guessed letter was stored
            in the guessedLetters array 5 times.

4. Problems: Correct logging of guessed letters
    a. Issue: Sometimes the key pressed is part of the current word, but the guessed letter is still not treated as 
                part of the word.
    b. Attempt 1: Make if/else statement more specific
        i. Result: Success!
    c. Root of problem: "else" part of checkUserEntry() was not properly phrased.
        i. I fixed the issue in (a) in a way that I forgot.
        ii. Then, I noticed that even the correct letters were stored in the guessedLetters array.
        iii. Then I noticed that the "else" statement in the checkUserEntry() function always stored any letter that the user entered.
        iv. So I replaced that "else" statement with one that contained "continue."
        v. I then created an "if" statement outside the "for" loop that would store the user entry in the guessedLetters array if it was
            not contained in the current word.

5. Problem: Win screen
    a. Issue: Displays "you won" when one letter belonging to the word is pressed.
        i. The "if" statement that displayWinScreen() is part of says that when all elements of one array equal all of the elements
            of the other, then the user wins.
        ii. But when one key is pressed, then both arrays update themselves with the letter, setting them equal.
    b. Attempt 1: Define the wordSlot array in a different place, probably in the "for" loop that checks the keyboard entry against the current word.
        i. Result: Failure. 
        ii. Now if I enter any letter, I win.
    c. Attempt 2: Create a function to compare 2 array values.
        i. Result: Failure.
        ii. If I enter a letter that matches a letter toward the beginning of the current word, then I win. 
        iii. Maybe there is a problem in the way I have expressed the function.
    d. Attempt 3: Include "continue" statements into the comparison function.
        i. Result: Failure.
    e. Attempt 4: Put the displayWinScreen function inside the comparison function.
        i. Realization: I don't think this will work.
    f. Attempt 5: Put the comparison function inside the checkUserEntry function.
        i. Result: Failure.
    g. Attempt 6: Will try a fix similar to one found at this website: https://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way
        i. Result: Failure.
        ii. Page does not respond upon pressing a correct key. Crashes eventually.
    h. Attempt 7: Will try attempt 6, but changing the "for" loop index variable to a "j" instead of an "i"
        i. Result: Success!
    j. Root of problem: The "for" loop of the function I was placing inside another "for" loop had the same index variable, thus
                            confusing the program.



/////////////////////////////////////////////////////////////////////////////////////////
*/

// random number between 0 and the array length:
// Math.floor((Math.random() * array.length))

var easyWords = ["car", "bird", "coffee", "bottle", "shirt", "html"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// This variable will select a random word in the easyWords array.
var currentWord =  easyWords[Math.floor((Math.random()* easyWords.length))];
// document.write(currentWord);
console.log(currentWord);

var wordSlot = [];
// var wordSlot2 = [];
var wordDisplay = [];
// var showWordDisplay = document.createElement("div");
var showWordDisplay = document.getElementById("holder");    // This variable is connected to an id in the html.
var guessedLetters = [];    // will hold the incorrect letters.
var showGuessedLetters = document.getElementById("guesses");




for (i = 0; i < currentWord.length; i++) {
    // wordSlot.push(currentWord.charAt(j));       // Will hold the letters of the word for display on the page
    wordSlot.push(currentWord.charAt(i));      // Will hold the letters.
    wordDisplay[i] = "_";                       // Holds underscores in the wordDisplay array, one for each letter in the current word.

}

console.log("wordSlot = " + wordSlot);

showWordDisplay.innerHTML = wordDisplay.join('');


// console.log(wordSlot);
var tries = 10;
var gameOver = false;

var showTries = document.getElementById("tries");
showTries.innerHTML = "Tries: " + tries;





// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {


    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var pressedKey = String.fromCharCode(event.which).toLowerCase();
    // console.log(pressedKey);
    // console.log(alphabet.includes(pressedKey));

    function checkUserEntry() {

        for (i = 0; i < currentWord.length; i++) {  // checks user keyboard input against the current word.

            if (pressedKey === currentWord.charAt(i)) {         // if the pressed key is included in the word
                /* # display letter in the correct slot on the screen
                    1. Will create row with a # of columns that equals the number of letters in the selected word.
                    2. Whenever the pressed key is included, the letter will appear in one of the row's columns.
                */
                // tries--;    // number of tries goes down by 1.
                wordDisplay.splice(i, 1, pressedKey);   // adds the pressed key to the wordDisplay array and removes an empty element 
                // console.log(wordDisplay);

                // compareArrayElements(wordDisplay, wordSlot);

                // if (compareArrayElements(wordDisplay, wordSlot)) {
                //     displayWinScreen();
                // }

            }

            else {
                continue;
            }          
        }

        if (currentWord.includes(pressedKey) === false) {
            guessedLetters.unshift(pressedKey);
        }
    
    }

    function displayWinScreen() {
        alert("You won!");
        var confirmNewGame = confirm("Start a new game?");
        if (confirmNewGame) {
            location.reload();
        }
        // else {
        //     break;
        // }
    }

    function compareArrayElements(arr1, arr2) {
        for (j = 0; j < currentWord.length; j++) {
            if (arr1[j] != arr2[j]) {
                return false;
                // continue;
            }
            // else {
            //     break;
            // }
        }
        return true;
    }


    /* ////////////////////////////////////////////////////

    Aside: Test case for compareArrayElements function

    arr1 = wordSlot = ["h", "t", "m", "l"]
    arr2 = wordDisplay = ["h", "_", "_", "_"]

    for loop:
    i = 0
        arr1[0] = "h"
        arr2[0] = "h"
        return true

    /////////////////////////////////////////////////////// */

    /*
    //////////////////////////////////////////////////

    Aside: Test case for checkUserEntry() function

    currentWord = "html"
    pressedKey = "m"

    for loop:
    i = 0  
        currentWord.charAt(0) == "h"
        "m" != "h"
        pressedKey != currentWord.charAt(0)

        "m" not in guessedLetters
        guessedLetters.unshift(pressedKey)

    i = 1
        currentWord.charAt(1) == "t"
        "m" != "t"
        pressedKey != currentWord.charAt(1)
        
        "m" in guessedLetters
        On to next iteration.

    i = 2
        currentWord.charAt(2) == "m"
        "m" === "m"
        pressedKey === currentWord.charAt(2)
        wordDisplay.splice(2, 1, pressedKey)    =====> adds pressedKey to wordDisplay array at index 2, removing one element.
        
    i = 3
        currentWord.charAt(3) == "l"
        "m" != "l"
        pressedKey != currentWord.charAt(3)

        "m" in guessedLetters
        Iterations stop here.



    ///////////////////////////////////////////////////
    */


    /* ==========================
       ==========================
       Actual Program
       ==========================
       ==========================

    */

    if (tries > 0) {    // if the user still has tries

        if (alphabet.includes(pressedKey)) {        // what happens when the pressed key is an element of the alphabet array

            checkUserEntry();   // this will change the entries of wordDisplay.
            tries--;        // these are counted correctly! Yes!
            // console.log(wordDisplay);
            // console.log("Tries = " + tries);

            showWordDisplay.innerHTML = wordDisplay.join('');   // Display the result of the correct guess to page.
            showGuessedLetters.innerHTML = "Incorrect Letters: " + guessedLetters;

            showTries.innerHTML = "Tries: " + tries;

            console.log("wordDisplay = " + wordDisplay);
            
            compareArrayElements(wordDisplay, wordSlot);

            if (compareArrayElements(wordDisplay, wordSlot)) {
                displayWinScreen();
            }
        }
    
        else {          // when the pressed key is NOT an element of the alphabet array
            alert("Press a valid key!");
        }

        // if (wordDisplay == wordSlot) {
        //     displayWinScreen();     // Need to define.
        // }
    }

    // else if (tries === 0) {
    //     displayGameOver();      // Need to define.
    // }





    // Set up score loop here.













}