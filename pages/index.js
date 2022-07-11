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

      <ul className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-3 list-none w-full px-0">
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