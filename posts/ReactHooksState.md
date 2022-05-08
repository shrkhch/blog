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

1つのフォームに対して１つの関数だと非効率なため、下記に修正。

``` javascript
// 例
const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
})

const handleOnChange = (name,value) => {
    setValues({...values, [name]: value});
}
```

``` jsx
{/*例*/}
<form>
    <input type="text" name="name" value={values.name} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
    <input type="email" name="email" value={values.email} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
    <input type="password" name="password" value={values.password} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
</form>
```

オブジェクトにすることで複数のフォームに対して一つの関数で済む。
