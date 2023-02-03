---
id: 2
title: 'Mail tests on Nodemailer'
date: '2022-04-30'
tags:
    - Node.js
    - Nodemailer
    - email
---
  
I decided to use [Nodemailer](https://nodemailer.com/about/) that had opportunity to make email sending tool.

## Nodemailer

This module is able to send email on Node.js app. It is used many users, license is MIT.  

## Install  

```javascript
npm i nodemailer
```

## Usage  

When setting for auth option in createTransport you should not write username and password by literal.  

So, you need to make ``` .env ``` file and call [dotenv](https://github.com/motdotla/dotenv) to refer environment variable.

```javascript
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

export default async function handler(req, res) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
    });

    let sendMailInfo = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: `${req.body.email}`,
        subject: "【TEST SEND】",
        text: "Hello World",
        html: "<p>Hello World!</p>"
    });

    res.status(200).json({
        success: true,
    })
};
```
