const fs = require("fs");
const Fontmin = require("fontmin");

const { shuffle, getHexCode, random, getHtml } = require("./util");

const exportPath = "./fonts/" + Date.now();
const shuffleArray = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const startCode = random(0xe001, 0xe801);

const fontmin = new Fontmin()
  .src(shuffleArray.map((item) => `svgs/${item}.svg`))
  .use(
    Fontmin.svgs2ttf("font.ttf", {
      fontName: "iconnumber",
      startCode: startCode,
    })
  )
  .use(
    Fontmin.css({
      // fontFamily: fontName,
      base64: true,
      glyph: false,
    })
  )
  .dest(exportPath);

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }
  const codes = getHexCode(startCode, shuffleArray.length);
  const result = {};
  let txt = "";
  shuffleArray.forEach((item, index) => {
    result[item] = codes[index];
  });
  shuffleArray.forEach((item, index) => {
    txt += result[index];
  });
  const str = JSON.stringify(result);
  fs.writeFile(exportPath + "/code.json", str, function (err) {
    if (err) {
      console.log("error...");
    }
  });
  fs.writeFile(exportPath + "/index.html", getHtml(txt), function (err) {
    if (err) {
      console.log("error...");
    }
  });
});
