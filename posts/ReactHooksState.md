---
id: 3
title: 'About Hooks of React'
date: '2022-05-08'
tags:
    - React
    - Hooks
---

## What is Hooks  

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.  
[Hooks - React](https://reactjs.org/docs/hooks-state.html)

## useState

```javascript
const [state, setState] = useState(initialValue);
```

``` state ``` is variable.  ``` setState ``` is to update function for state value.  
And initial value is declared in ``` useState ``` function.

## Implement on Form

``` javascript
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

``` state ``` puts together it looks like simple as follow.  
In addition to simple, you don't need coding multiple handler.

``` javascript
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
<form>
    <input type="text" name="name" value={values.name} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
    <input type="email" name="email" value={values.email} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
    <input type="password" name="password" value={values.password} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
</form>
```
