const fs = require("fs");
const Fontmin = require("fontmin");

const { shuffle, getHexCode, random } = require("./util");

const exportPath = "./fonts/" + Date.now();
const shuffleArray = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const startCode = random(0xe01, 0xe001);

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
  const codes = getHexCode(startCode);
  const result = {};
  shuffleArray.forEach((item, index) => {
    result[item] = codes[index];
  });
  const str = JSON.stringify(result);
  fs.writeFile(exportPath + "/code.json", str, function (err) {
    if (err) {
      res.status(500).send("Server is error...");
    }
  });
});
