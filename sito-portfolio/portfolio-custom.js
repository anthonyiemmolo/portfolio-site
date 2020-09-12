/* Carosell words */
var words = ["Dreamer", "Never give up", "Always aim high", "Impulsive", "Scout", "Look at the sky but stay on the ground"];
var i = 0;
var word = document.getElementById("carosel-words");
setInterval(update_carosel_words, 2000);
function update_carosel_words() {
  word.innerHTML = words[i];
  i ++;
  if (i >= words.length) {
    i = 0;
  }
}
