import Head from "next/head";
import Post from "@/components/Post";
import getAllPosts from "lib/post";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="flex flex-col justify-center w-full">
        <div className="mx-auto max-w-3xl items-center">
          <h1 className="text-center text-3xl pb-5 underline underline-offset-[10px] decoration-2">
            Posts
          </h1>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.frontmatter.id}>
                  <Post post={post} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
