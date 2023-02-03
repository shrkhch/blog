---
id: 4
title: 'When it uses property variable'
date: '2022-05-08'
tags:
    - JavaScript
    - TypeScript
---

It surrounds property variable with square brackets.

``` javascript
const foo = 'age';
const a = {
    name: 'Alice',
    [foo]: '20'
};

console.log(a) 
// Object { name: "Alis", age: "20" }
```
