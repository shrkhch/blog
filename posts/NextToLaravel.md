---
id: 5
title: "Link Next.js and Laravel"
date: "2022-05-16"
tags:
  - GraphQL
  - Docker
  - Laravel
  - Next.js
---

I catched a connection error between Next.js and Laravel when had tested using those to implement GraphQL Query. I write how to recover.

## GraphQL
  
> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.  
> [graphql.org](https://graphql.org/)

## Tools
  
- container  
  - Docker
    - Laravel
    - Lighthouse
    - nginx
    - MySQL
- frontend
  - Next.js
  - Apollo Client

## todo

Excute below query to get ``` userId ``` in Next.js.

```graphql
query {
    users {
        id
    }
}
# {id: '1'}
```

## Next.js
  
install ApolloClient and graphql.

```node
npm i @apollo/client graphql
```

Coding query to get value test at getStaticProps.

```javascript
export default function Home({ launches }) {
  console.log(launches);
  return <div>test</div>;
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        users {
          id
        }
      }
    `,
  });
  return {
    props: {
      launches: data,
    },
  };
}
```

Error connecting GraphQL occurred when running Next.js.  
``` reason: connect ECONNREFUSED 127.0.0.1:80 ```
  
Appearly, it seems like falied connect to backend side.
  
![connectError](/images/postimages/nexttolaravelerror.png)

## Recovery

According to [Docs](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds), it needs to set uri special DNS in ApolloClient as follow.
  
```html
http://host.docker.internal/graphql
```
  
This URI is for development purpose and does not production environment.
  