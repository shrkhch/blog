import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import CodeBlock from "@/components/CodeBlock";

export default function PostPage({
  frontmatter: { title, date, tags },
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full">
        <div className="max-w-2xl mx-auto px-1.5 mb-5">
          <span className="text-md">{date}</span>
          <h1 className="text-4xl font-boldr">{title}</h1>
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <li key={t} className="my-1.5">
                <a href={`/tags/${t}`} className="border p-1 rounded-md text-sm bg-[#c1e0ff]">{t}</a>
              </li>
            ))}
          </ul>
          <div className="w-full border-b-2 my-1.5"></div>
        </div>
        <article className="mx-auto markdown">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkEmoji]}
            components={{
              code: CodeBlock,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const contentWithMeta = fs.readFileSync(
    path.join(process.cwd(), "posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(contentWithMeta);
  //const cardDatas = await makeCard(content);
  // console.log(cardDatas);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
