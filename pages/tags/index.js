import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Tags({ metaData }) {
  //console.log(metaData)
  const tags = metaData.map((p) => p.frontmatter.tags);
  const tagsArray = Array.from(new Set(tags.flat()));
  const sortedTags = tagsArray.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-5 underline underline-offset-[10px] decoration-2">
        Tags
      </h1>
      <ul className="text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedTags.map((m, index) => {
          return (
              <li key={index} className="text-md m-2 p-1 border border-green-600 rounded-tr-lg rounded-bl-lg"><a className="hover:text-[#3261ba]"href={`/tags/${m}`}>{m}</a></li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  // get slug and frontmatter
  const metaData = files.map((filename) => {
    const slug = filename.replace(".md", "");

    // get frontmatter
    const contentwithmeta = fs.readFileSync(
      path.join(process.cwd(), "posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(contentwithmeta);

    //console.log('result:', result);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      metaData,
    },
  };
}
