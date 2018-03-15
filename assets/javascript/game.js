/*
Game Plan:

1. Create an array of words.                                                                            (in progress)
    a. These words will be used in the hangman game for users to guess.
    b. Easy mode array                                                                                      (o)
    c. Normal mode                                                                                          (x)
    d. Hard mode                                                                                            (x)

2. Create an array of the letters of the alphabet.                                                          (A)

3. Create a variable that stores the number of tries                                                        (A)
    a. If the currentWord has less than 6 letters,                                                          (o)
        then the # of tries will be 10.
    b. If the currentWord has 6 or more letters,                                                            (x)
        then the # of tries will be the # of letters in the word
        multiplied by 2.

4. Make the website accept keyboard input.                                                                  (A)

5. Have the website select a word from the array.                                                           (A)
    a. Store each letter of the word in an array.
    b. Create columns equal to the number of letters in the array.

6. Do the following steps until game over or success.                                                       (A)  

7. Whenever the user enters a letter of the alphabet,                                                       (A)
    a. Convert the letter to lowercase.                                                                     (o)
    b. Compare the letter to the letters of the word array                                                  (o)
        i. We will most likely need to use the charAt() method.

    8. If the input matches the first letter of the word                                                    (A)
        a. Letter appears in its proper column slot.                                                        (o)
        b. # of tries goes down by 1.                                                                       (o)

    9. If the input doesn't match the first letter of the word                                              (A)
        a. Go to next letter of the word.                                                                   (o)

    10. Do step 5 and 6 for all the letters of the word.                                                    (A)

    11. If the input doesn't match any of the letters of the word,                                          (A)
        a. Letter appears in "used letter" section.                                                         (o)
        b. Hangman body part drawn.
            i. create a variable that stores a div. This div
                will be where the hangman picture is displayed.
            ii. After every incorrect guess, a stage of the hangman
                picture is displayed.
            iii. 10 stages in total.
        c. # of tries goes down by 1.                                                                       (o)

12. If user guessed all letters of word correctly,                                                          (A)
    a. User wins.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.

13. If # of tries = 0,                                                                                      (A)
    a. Display game over somewhere in the document.
    b. User is offered a prompt, asking if they want to go to the next word or go back to menu.
    c. Maybe a function can be created.                                                                     (o)

14. ...but what if the user DOESN'T enter a letter of the alphabet?                                         (A)
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

6. Problem: Display of word's letters to correct divs of webpage
    a. Issue: Whenever letters display on screen, they don't go into their divs. Instead, they all clump together into a word.
    b. Attempt 1: Examine where the js file puts the characters of the wordDisplay array.
        i. Noticed that new divs were created whenever new characters were displayed to the page.
        ii. Created one id and one variable to try rectifying thie issue.
    c. Attempt 2: [see b-ii]
        i. Result: Partial Success.
        ii. Letters are displayed to column slots on screen, but are placed in a strange order.
        iii. e.g. "bottle." Enter b: _ _ _ _ _ b
                                o: _ _ _ _ b o
                                t: _ _ _ b o t
                                etc.
    d. Attempt 3: Use querySelectorAll() method
        i. Result: Success!

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
*/

// random number between 0 and the array length:
// Math.floor((Math.random() * array.length))

// words that will be randomly selected
var words = ["car", "bird", "coffee", "bottle", "shirt", "html", "city", "skyline", "metropolis", "crowd", "commute", "traffic", "poverty"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// This variable will select a random word in the words array.
var currentWord = words[Math.floor((Math.random() * words.length))];
console.log(currentWord);                                       // displays the picked word to the console

var wordSlot = [];                                              // holds each character of the current word
var wordDisplay = [];                                           // will hold the picked letters and display them to the page

var guessedLetters = [];                                        // will hold the incorrect letters.
var showGuessedLetters = document.getElementById("guesses");    // Accesses the div with the "guesses" id.
var showWordDisplay = document.getElementById("holder");        // Accesses the div with the "holder" id.

// Array of hangman picture locations
var hmPics = ["assets/images/hm-stage0.jpg", "assets/images/hm-stage1.jpg", "assets/images/hm-stage2.jpg", "assets/images/hm-stage3.jpg", "assets/images/hm-stage4.jpg", "assets/images/hm-stage5.jpg", "assets/images/hm-stage6.jpg", "assets/images/hm-stage7.jpg", "assets/images/hm-stage8.jpg", "assets/images/hm-stage9.jpg", "assets/images/hm-stage10.jpg"];

var picHolder = document.getElementById("theHangman");  // Accesses the div with the "theHangman" id.
var imgHolder = document.createElement("div");          // creates a new "div" element
imgHolder.id = "clearfix";
var img = document.createElement("img");                // creates a new "img" element

picHolder.appendChild(img);                             // adds the "img" element to the div with the "theHangman" id.
var x = 0;                                              // a variable for the index of the hmPics array
img.setAttribute("src", hmPics[x]);                     // adds an "src" to the "img" element, with the src being an address in the hmPics array
img.id = "img-resize";                                  // adds the id "img-resize" to the "img" element
img.className = "pt-5 pl-0";                            // adds classes to the "img" element




/////////////////// Music Section /////////////////////////

var audioElement = document.createElement("audio");                     // creates a new "audio" element
audioElement.setAttribute("src", "assets/redbone-instrumental.mp3");    // adds an "src" to the "audio" element. Links to the music.

function playMusic() {                                                  // function to play the music
    audioElement.play();
}

function pauseMusic() {                                                 // function to pause the music
    audioElement.pause();
}

var playButton = document.getElementById("play-button");                // accesses the element with the "play-button" id.
playButton.setAttribute("onclick", "playMusic()");                      // adds the "onclick" attribute to the element with the "play-button" id.
                                                                        // (plays the music when the element is clicked.)

var pauseButton = document.getElementById("pause-button");              // accesses the div with the "pause-button" id.
pauseButton.setAttribute("onclick", "pauseMusic()");                    // adds the "onclick" attribute to the div with the "pause-button" id.
                                                                        // (pauses the music when the element is clicked.)

/////////////////////////////////////////////////////////////


for (i = 0; i < currentWord.length; i++) {

    wordSlot.push(currentWord.charAt(i));                       // Places the letters of the word into the wordSlot array.
    wordDisplay[i] = "_";                                       // Holds underscores in the wordDisplay array, one for each letter in the current word.
    var letter = document.createElement("div");                 // creates a <div> node
    letter.className = "col bigtext";                           // gives the class names "col" and "bigtext" to the <div> node
    letter.id = "letter-slot";                                  // gives the id "letter-slot" to the <div> node
    var letterSlot = document.createTextNode(wordDisplay[i]);   // creates a "text node" that contains a letter of the current word.

    letter.appendChild(letterSlot);                             // adds an entry of the wordSlot array to a letter node
                                                                // NOTE: appendChild will only accept nodes as arguments.

    showWordDisplay.appendChild(letter);                        // appends the letter from the last step to the showWordDisplay variable.

}


console.log("wordSlot = " + wordSlot);                          // displays the wordSlot array to the console

var tries = 10;                                                 // number of tries

var showTries = document.getElementById("tries");               // accesses the element with the "tries" id.
showTries.innerHTML = "Tries: " + tries;                        // adds text to display in the element with the "tries" id.





// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {


    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var pressedKey = String.fromCharCode(event.which).toLowerCase();


    function checkUserEntry() {                                    // function to check the user's keyboard input against the current word

        for (i = 0; i < currentWord.length; i++) {                 // checks user keyboard input against the current word.

            if (pressedKey === currentWord.charAt(i)) {            // if the pressed key matches the character in the current slot
               
                wordDisplay.splice(i, 1, pressedKey);              // adds the pressed key to the wordDisplay array and removes an empty element 


                // selects all elements with the class "col" under <div id = "holder"></div>
                var letter2 = document.getElementById("holder").querySelectorAll(".col");
                letter2[i].innerHTML = wordDisplay[i];              // sets the ith child of letter2 to the letter in wordDisplay
            }

            else {                                                  // if the pressed key does NOT match the character in the current slot
                continue;                                           // goes to the next iteration
            }
        }

        if (currentWord.includes(pressedKey) === false) {            // if the pressed key is NOT included in the word

            if (guessedLetters.includes(pressedKey) === false) {     // if the guessedLetters array does NOT contain the pressed key
                guessedLetters.unshift(pressedKey);                  // adds the pressed key to the guessedLetters array
                x = x + 1;                                           // hmPics index variable goes up by 1
                img.setAttribute("src", hmPics[x]);                  // displays the next stage of the hangman picture
                tries--;                                             // # of tries goes down by 1

            }
        }

    }



    function displayWinScreen() {                                       // function for displaying the win screen.
        alert("You won!");
        var confirmNewGame = confirm("Start a new game?");
        if (confirmNewGame) {                                           // if the user selects "yes" to the above question
            location.reload();                                          // reloads page
        }
    }

    function compareArrayElements(arr1, arr2) {                         // function for comparing the elements of two arrays
        for (j = 0; j < currentWord.length; j++) {                      // goes through each array element

            if (arr1[j] != arr2[j]) {                                   // if at any point in the loop, if an element of one array does not 
                                                                        // equal the element of the other array...
                return false;                                           // return a value of "false"
            }
            
        }
        return true;                                                    // otherwise, if the element of the array all match, return true.
    }

    function displayGameOver() {                                        // function for displaying game over screen.
        alert("Game Over!");
        var confirmNewGame = confirm("Start a new game?");
        if (confirmNewGame) {
            location.reload();
        }
    }


    /* ==========================
       ==========================
       Actual Program
       ==========================
       ==========================

    */

    if (tries > 0) {                                                     // if the user still has tries

        if (alphabet.includes(pressedKey)) {                             // what happens when the pressed key is an element of the alphabet array

            checkUserEntry();                                            // this will change the entries of wordDisplay.
            console.log("Tries = " + tries);                             // displays number of tries to console.


            // displays the incorrect letters to the element with the "guesses" id
            showGuessedLetters.innerHTML = "Incorrect Letters: " + guessedLetters;  

            showTries.innerHTML = "Tries: " + tries;                     // displays the number of tries to the element with the "tries" id

            console.log("wordDisplay = " + wordDisplay);                 // displays the wordDisplay array to the console


            compareArrayElements(wordDisplay, wordSlot);                 // runs the function to compare elements of two arrays

            if (compareArrayElements(wordDisplay, wordSlot)) {           // if all elements match each other
                displayWinScreen();                                      // win screen displayed
            }
        }

        else {                                                           // when the pressed key is NOT an element of the alphabet array
            alert("Press a valid key!");
        }

        
    }

    else if (tries == 0) {                                              // if the user runs out of tries
        displayGameOver();                                              // game over  
    }




}