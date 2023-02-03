import getAllPosts from "lib/post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function TagPage({ posts, tag }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl pb-5 underline underline-offset-8 decoration-2">
        {tag}
      </h2>

      <ul>
        {posts.map((p) => {
          return (
            <li key={p.frontmatter.id}>
              <div className="flex flex-col items-start mb-5 gap-1 border-b-2 border-gray-600 border-dashed">
                <h2 className="text-md">{p.frontmatter.date}</h2>
                <h1 className="text-xl">
                  <a
                    className="hover:text-[#3261ba]"
                    href={`/blog/${p.slug}`}
                  >
                    {p.frontmatter.title}
                  </a>
                </h1>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const metaData = await getAllPosts();
  const tags = metaData.map((m) => m.frontmatter.tags);
  const tagsArray = Array.from(new Set(tags.flat()));
  const paths = tagsArray.map((t) => {
    return {
      params: {
        tag: t,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const posts = files.map((f) => {
    const slug = f.replace(/\.md$/, "");
    //console.log(f);
    const content = fs.readFileSync(path.join(process.cwd(), "posts", `${f}`), {
      encoding: "utf-8",
    });
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug,
    };
  });
  const tag = params.tag;
  const fPosts = posts.filter((post) => {
    return post.frontmatter.tags.includes(tag);
  });

  const sPosts = fPosts.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) {
      return -1;
    }
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    }
    return 0;
  });
  return {
    props: {
      posts: sPosts,
      tag: tag,
    },
  };
}
