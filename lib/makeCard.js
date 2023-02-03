const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default async function makeCard(content) {
  const lines = content.split("\n");
  const links = [];
  // url取得
  lines.map((line) => {
    if (line.startsWith("https://")) {
      links.push(line);
    }
  });
  //console.log("links:",links);
  // metaデータ取得
  const temps = await Promise.all(
    links.map(async (link) => {
      const metas = await fetch(link, {credentials: "omit"})
        .then((r) => r.text())
        .then((text) => {
          const metaData = {
            url: link,
            title: "",
            description: "",
            image: "",
          };
          const doms = new JSDOM(text);
          const metas = doms.window.document.getElementsByTagName("meta");
          for (let i = 0; i < metas.length; i++) {
            let p =
              metas[i].getAttribute("property") ||
              metas[i].getAttribute("name");
            if (typeof p === "string") {
              if (p.match("title")) {
                metaData.title = metas[i].getAttribute("content");
              }
              if (p === "og:image") {
                metaData.image = metas[i].getAttribute("content");
              }
              if (p.match("description")) {
                metaData.description = metas[i]
                  .getAttribute("content")
                  .slice(0, 50);
              }
            }
          }
          return metaData;
        })
        .catch((e) => console.log(e));
      return metas;
    })
  );
  // null undefinedなオブジェクトを除外
  const cardDatas = temps.filter((temp) => temp != undefined);
  return cardDatas;
}
