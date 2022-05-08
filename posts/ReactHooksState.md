---
id: 3
title: 'useStateについて'
date: '2022-05-08'
tags:
    - React Hooks
    - Spread Syntax
---

React Hooksの機能の一つ、useStateなどの使い方についてのメモ。

## React Hooksとは  

React16.8で導入され、Reactのstateなどの機能をクラスを書かずに使えるようにした新機能。  
Reactの機能に接続するための特別な関数。

## useState

``` javascript
const [state, setState] = useState(initialValue);
```

stateが変数、setStateがstateの値を更新する関数、useState関数で初期値を宣言する。

## フォームでの実装

``` javascript
// 例
const [name, setName] = useState('');
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');

const handleName = (name) => {
    setName(name);
}
const handleMail = (email) => {
    setMail(mail);
}

const handlePassWord = (password) => {
    setPassWord(password);
}

```

上記だと効率が悪いため、下記に修正。

``` javascript
const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
})

const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({...values, [name]: value});
}
```

オブジェクトで管理することで複数のフォームに対して一つのハンドラーで済む。
