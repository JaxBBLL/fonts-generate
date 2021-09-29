function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

function getHexCode(startCode, len) {
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push("&#x" + (startCode + i).toString(16) + ";");
  }
  return res;
}

function getHtml(str) {
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>font</title>
      <link rel="stylesheet" href="font.css" />
      <style>
        .text {
          font-family: iconnumber;
        }
      </style>
    </head>
    <body>
      <div class="text">${str}</div>
    </body>
  </html>
  `;
  return html;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  shuffle,
  random,
  getHexCode,
  getHtml,
};
