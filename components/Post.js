export default function Post({ post }) {
  return (
    <div className="flex flex-col items-start mb-5 gap-1 border-b-2 border-gray-600 border-dashed">
      <h2 className="text-md">{post.frontmatter.date}</h2>
      <h1 className="text-xl">
        <a
          href={`/blog/${post.slug}`}
          className="hover:text-[#3261ba] no-underline"
        >
          {post.frontmatter.title}
        </a>
      </h1>
    </div>
  );
}
