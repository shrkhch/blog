import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getAllPosts () {
        // get files from the posts dir
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

    // get slug and frontmatter 
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '');

        // get frontmatter
        const contentwithmeta = fs.readFileSync(path.join(process.cwd(),'posts',filename), 'utf-8');
        const {data:frontmatter} = matter(contentwithmeta);
        return {
        slug,
        frontmatter
        }
    });
    // console.log("---");
    // console.log("*** before posts***")
    // console.log(posts)
    // console.log("---");
    
    // To Desc
    posts.sort((a,b) => {
        if (a.frontmatter.date > b.frontmatter.date) {
        return -1;
        }
        if(a.frontmatter.date < b.frontmatter.date) {
        return 1;
        }
        return 0;
    })
    
    // console.log("---");
    // console.log("*** after posts***")
    // console.log(posts)
    // console.log("---");

    return JSON.parse(JSON.stringify(posts))
} 