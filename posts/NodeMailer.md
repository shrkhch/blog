---
title: 'Nodemailer使ってみた'
date: '2022-04-30'
tags:
    - Node.js
    - NodeMailer
---

Next.jsでメール送信の機能を作成する機会があったので、Nodemailerを使ってみることにした。

## Nodemailerとは

Node.jsアプリケーションで簡単にメールが送信できるモジュール。  
公式ドキュメントは[**こちら**](https://nodemailer.com/about/)  

## 導入  

npmコマンドでインストール。

``` javascript
npm i nodemailer
```

**pages/api/sendmail.js**

``` javascript
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

## 記録

createTransportでauthの設定をする際、ベタ書きはセキュアでない為環境変数で設定を行った。  
この時、dotenvモジュールで.envの参照を行わないとsubmitイベント時にエラーが発生する。
