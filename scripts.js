
var wordList = ['lazer gun','watermelon', 'telekenesis', 'pool party', 'dog', 'cat', 'school', 'hamburger', 'movie']



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
  
    return wordList;
  }

function newWord() {
    var randomWord = document.getElementById('word').innerHTML;
    console.log(randomWord);
    
    randomWord = wordList[0];
    console.log(randomWord);

    return;
};

var buttonPush = document.getElementById('button');
/*buttonPush.addEventListener('click', newWord, false); */
/*document.getElementById('button').addEventListener('click',function() {
alert("I'm an alert!")}, false); */

console.log(document.getElementById('button').innerHTML);

newWord();

var i = 0 //i is the number of times the button has been pushed

function changeWord() {
document.getElementById('word').innerHTML = (wordList[0+i]);

if (i === 0) {
  document.getElementById('button').innerHTML = "<h2>Next Word!</h2>";
}

return i += 1;

};

document.getElementById('button').addEventListener('click', changeWord, false);