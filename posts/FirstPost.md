---
id: 1
title: 'Made blog with Next.js'
date: '2022-04-29'
tags:
    - Next.js
    - Markdown
---

This markdown blog has made with [Next.js](https://nextjs.org/). Recently, that is popular React framework.  
I thought should not use ``` dangerouslySetInnerHTML ``` for security reasons when render html from markdown.  

So, it is rendered by [react-markdown](https://github.com/remarkjs/react-markdown).
  
## Libraries

- ### Flavor  

  - [**remark-gfm**](https://github.com/remarkjs/remark-gfm)

- ### Emoji  

  - [**remark-emoji**](https://github.com/rhysd/remark-emoji)  
:wave: :cat: :apple:

- ### Syntax Highlight  

  - [**react-syntax-highlighter**](https://github.com/react-syntax-highlighter/react-syntax-highlighter)  

``` js
const a = () => {
    console.log("Hello");
}

a(); // Hello
```  
