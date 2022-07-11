---
id: 4
title: 'プロパティ名を変数にしたい時'
date: '2022-05-08'
tags:
    - JavaScript
---

変数名を角括弧で囲む。

``` javascript
const foo = 'age';
const a = {
    name: 'Alice',
    [foo]: '20'
};

console.log(a) // Object { name: "Alis", age: "20" }
```

以上。