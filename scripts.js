
var wordList = [dog, cat, school, hamburger, movie]

var button = document.getElementById('button');

function shuffle(wordList) {
    let currentIndex = wordList.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [wordList[currentIndex], wordList[randomIndex]] = [
        wordList[randomIndex], wordList[currentIndex]];
    }
  
    return awordList;
  }

function newWord() {
    var randomWord = document.getElementById('word').innerHTML;
    console.log(randomWord);
    
    randomWord = wordList[0];
    console.log(randomWord);

    return;
};

button.addEventListener(onclick, newWord(), false);
