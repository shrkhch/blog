---
id: 6
title: "Made wordwolf app with Parcel"
date: "2023-12-03"
tags:
  - React
  - Parcel
  - localForage
---

I made Word Wolf app called [MTGワードウルフ](https://wordwolf-mtg.vercel.app/).
  
MTG means [Magic: The Gathering :black_joker:](https://mtg-jp.com/)

## What is WordWolf  

Word Wolf is a game that we talk about given theme and guess wolf given different theme.

## The why reason I made

We often live up to play Word Wolf when get-together but think not exist that of "Magic" version.  
So, I decided to make that and use below.

## Ingredients

- bundler
  - Parcel
- frontend
  - React
  - TypeScript
- design
  - tailwindcss
- storage
  - localForage

## Bundler  
  
[Parcel](https://parceljs.org/) is zero config and fast bundler.Also diagnostics is simple.  
However, I thought might better webpack for studying.
  
## Storage

I used [localForage](https://localforage.github.io/localForage/) to save player name and theme data.
That can handle IndexedDB/WebSQL like similar notation when use localStorage.  
It use IndexedDB default as if necessary use WebSQL and localStorage.

## Considered  

- ### UI
  
Stick to responsive and simple UI as suppose to play offline.

- ### Validation
  
I implemented validation that would liked to tap nameless, duplication and too long name when user regsiter player name.

## Improvement   
  
If I feel like it, I would like to design like fit "Magic World".
