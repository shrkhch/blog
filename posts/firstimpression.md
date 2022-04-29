---
title: 'ブログを構築した'
date: '2022-04-06'
tags:
    - Next.js
    - Markdown
---
先月、Next.jsとMDXを使ってブログを構築したが、[Inkdrop](https://www.inkdrop.app/)との兼ね合いを考えてもう一度0からMarkdownで作ってみることにした。

## ライブラリなど

- Markdown Renderer [**react-markdown**](https://github.com/remarkjs/react-markdown)
- emoji [**twemoji**](https://twemoji.maxcdn.com/)[**remark-emoji**](https://github.com/rhysd/remark-emoji)  
:wave: :cat: :apple:
- Syntax Highlight [**rehype-prism-plus**](https://github.com/timlrx/rehype-prism-plus)  

``` js
const a = () => {
    console.log("Hello");
}

a(); // Hello
```  

## 今後  

- Inkdrop活用  
- TypeScript化
- Google Analytics導入
- OGP化
- Tag検索
- Jestを使ったテスト


などをやっていきたい。
