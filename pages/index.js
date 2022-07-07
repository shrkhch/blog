/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Post from '@/components/Post'
import getAllPosts from 'lib/post';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-0 ">
      <Head>
        <title>Top</title>
      </Head>

      <ul className="grid grid-cols-2 gap-3 list-none w-full px-0">
        {posts.map((post,index) => {
          //console.log(post["frontmatter"]["id"]);
          return (
          <li key={post.frontmatter.id} className="my-4">
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