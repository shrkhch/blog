---
id: 5
title: 'NextとLaravelの連携'
date: '2022-05-16'
tags: 
    - graphql
    - docker
---

graphqlを使ってNext.jsとバックエンドとの連携のテストをした。実施したこととエラーのリカバリ方法を記録する。  

## 主な環境  
- インフラ
  - Docker Desktop for Mac
- フロントエンド
    - Next.js port:3000
    - Apollo Client
- バックエンド
    - Laravel
    - nginx port:80
    - MySQL

## graphql  
以下のクエリで値が取得できるようLaravel側で設定。
``` 
query {
    users {
        id
    }
}
# {id: '1'}
```
## Next.js  
Apolloとgraphqlをインストール
``` javascript
npm i @apollo/client graphql 
```
getStaticPropsでクエリを記述し、値の取得を行う。
``` javascript
// index.js
export default function Home({launches}) {
    console.log(launches);
    return (
        <div>test</div>
    );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query {
        users {
          id
        }
      }
    `
  });
  return {
    props: {
      launches: data
    }
  }
}
```
**しかしここでエラーが発生**  
reason: connect ECONNREFUSED 127.0.0.1:80  
![connectError](/images/postimages/nexttolaravelerror.png)  
nginx側に接続できないとのこと。 

試行錯誤し、紆余曲折を経て以下の記事に辿り着く。  
:cat: [**docker内部で、nuxtのasync/awaitを使おうとすると connect ECONNREFUSED 127.0.0.1のエラーがでる問題**](https://teratail.com/questions/209931) :cat:   

どうやらドメインを **host.docker.internal**という特殊なドメインに接続する必要があるとのこと。  

### リカバリ
``` javascript
// uri: 'http://localhost/graphql'
uri:'http://host.docker.internal/graphql'
```

無事値が取得できました。
![connectSuccess](/images/postimages/connectedlaravel.png)  

## 特殊ドメイン
**host.docker.internal**については[公式](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)に記載があり、コンテナからホストに繋ぐ際に使われる開発時の特殊ドメインだそうでDocker Desktop for Mac環境でしか使用できないとのこと。またエラーが起きそうな予感がします。