function shuffle(array) {
  var counter = array.length, temp, index;
  while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}

function chunk(shuffledArray, size) {
  var chunks = [],
      i = 0,
      n = shuffledArray.length,
      num = n/size;
  while (i < n) {
    chunks.push(shuffledArray.slice(i, i += num));
  }
  return chunks;
}

function shuffleChunk(inputArray, num) {
  var shuffledArray = shuffle(inputArray);
  return chunk(shuffledArray, num);
}

module.exports = {
  shuffleChunk: shuffleChunk,
  chunk: chunk,
  shuffle: shuffle
};
