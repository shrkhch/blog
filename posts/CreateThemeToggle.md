---
id: 6
title: 'ダークモード実装'
date: '2022-07-14'
tags:
    - React
    - next-themes
---


当ブログに以下の流れでダークモードを実装した。  

1 [next-themes](https://github.com/pacocoursey/next-themes)をインストール  
 ```
 npm i next-themes 
 ```
  

2 ThemePrivderのインポート  
``` javascript
// _app.js
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

3 bodyにダークモード時のスタイルを記述  
``` javascript
// _document.js
<body className='dark:bg-gray-800'>
```  
  

4 tailwind.config.jsの設定  
``` javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //ダークモードを有効化(ON/OFFの切り替え)
  theme: {
    extend: {},
  },
  plugins: [],
}
```  
  

5 ボタン作成  
useEffectで描画後にどちらのテーマかを判定してボタンの表示を動的にしている。  
``` javascript
import { useState, useEffect} from 'react';
import { useTheme } from 'next-themes';
import { SunLight, HalfMoon } from 'iconoir-react';

export default function ToggleButton () {
    const {theme, setTheme } = useTheme();
    const [ mounted, setMounted] = useState(false);

    useEffect ( () => setMounted(true), []);

    let icon;
    if (mounted) {
        if(theme === 'dark') {
            icon = <SunLight />;
        } else {
            icon = <HalfMoon />;
        }
    }
    return (
        <div>
            <button
            type="button"
            onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark' )}
            >
            {icon}
            </button>
        </div>
    )
}
```