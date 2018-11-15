function harmlessRansomNote(noteText, magazineText) {
  //first step: Change the args into an array of words
  var noteArr = noteText.split(' '); //note array
  var magazineArr = magazineText.split(' '); //magazine array
  var magazineObj = {}; //Build hash table

  //we want to collect the number of times a word is typed USE FOREACH
  magazineArr.forEach(word => {
    //loop through and keep count how many times a word is present
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++; //if the word is not present, it will read zero and be pushed to the hash table, then increment by 1


  });
  var noteIsPossible = true; //check to see if it is possible to make note.

  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  return noteIsPossible;
}

harmlessRansomNote('', 'this is all the text in the magazine')


//Time Complexity

//Big O
//How scalable a function is. The input size will affect the speed of an algorithim by what?
/*
linear runtime 0 of (n)
Constant runtime
Big O notation: "0 (1)" 0 of 1

function logAll(array) {
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
  }
}

exponentail runtime: "0 (n^2)"
THIS FUNCTION WILL BECOME SLOW
function addAndLog(array){
  for (var i = 0;, i < array.length; i++) {
    for (var j = 0;, j < array.length; j++) {
    }
  }
}

Binarary Search
Can be used to cut a dictionary style code search in half by removing results

logAll([1, 2, 3, 4, 5])
*/
