function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

function getHexCode(startCode) {
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push("&#x" + (startCode + i).toString(16) + ";");
  }
  return res;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  shuffle,
  getHexCode,
  random,
};
