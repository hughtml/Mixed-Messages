/**
 * Message Generator program created for the Codecademy Full Stack Path
 * Every time the user runs the program, they are presented with a new, randomised output 
 */

 //Storing the data for the randomised sections of the message
const keys = ["C major", "C minor", "Db major", "Db minor", "D major", "D minor", "Eb major", "Eb minor", "E major", "E minor", "F major", "F minor", "F# major", "F# minor", "G major", "G minor", "Ab major", "Ab minor", "A major", "A minor", "Bb major", "Bb minor", "B major", "B minor"];
const timeSigs = ["4/4", "3/4", "2/4", "2/2", "3/8", "6/8", "9/8", "12/8", "5/4", "6/4"];
const numChords = [1, 2, 3, 4, 5, 6, 7, 8];

//Generating random numbers to select random indexes from the arrays
let randomNumber = Math.floor(Math.random() * keys.length);
const key = keys[randomNumber];
randomNumber = Math.floor(Math.random() * timeSigs.length);
const timeSig = timeSigs[randomNumber];
randomNumber = Math.floor(Math.random() * numChords.length);
const numChord = numChords[randomNumber];

//Creating and displayingthe message
const message = `You're writing another song?! Go you! For this one you should try writing in ${timeSig} using ${numChord} chord(s) from ${key}. Happy writing!`;
console.log(message);