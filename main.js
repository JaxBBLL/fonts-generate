const fs = require("fs");
const Fontmin = require("fontmin");

const exportPath = "./fonts";
const startCode = 0xa00;

const fontmin = new Fontmin()
  .src("svgs/*.svg")
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
  const codes = getCode(startCode);
  const str = JSON.stringify(codes);
  fs.writeFile(exportPath + "/code.json", str, function (err) {
    if (err) {
      res.status(500).send("Server is error...");
    }
  });
});

function getCode(startCode) {
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push("&#x" + (startCode++).toString(16) + ";");
  }
  return res;
}
