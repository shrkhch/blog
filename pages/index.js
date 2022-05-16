/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Post from '@/components/Post'
import getAllPosts from 'lib/post';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-0">
      <Head>
        <title>Mocha Talk</title>
        <meta name='description' content='備忘録や何某を記録するブログ'></meta>
      </Head>

      <ul className="container bg-emerald-100 rounded-md list-none mx-auto w-full px-0">
        {posts.map((post,index) => {
          //console.log(post["frontmatter"]["id"]);
          return (
          <li key={post.frontmatter.id} className="rounded-md my-4">
            <Post post={post} /> 
          </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts();

  return {
      props: {
        posts,
      },
  };
}