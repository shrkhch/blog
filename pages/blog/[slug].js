/* eslint-disable react/no-children-prop */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'
import rehypePrism from 'rehype-prism-plus'

export default function PostPage({ 
    frontmatter: {title,date,cover_image}, slug, content 
}) {
    return (
        <div className="container mx-auto  bg-slate-700 rounded-md py-6">
            <Head>
                <title>{slug}</title>
            </Head>
            <div className="flex">
                <p className="text-2xl pr-1">タイトル:</p>
                <p className=" text-blue-300 text-2xl font-bold">{title}</p>
            </div>
            <div className="flex">
                <p className="text-2xl pr-1">作成日時:</p>
                <p className=" text-blue-300 text-2xl font-bold">{date}</p>
            </div>

            <div className="divider"></div>
            <div className="markdown">
            <ReactMarkdown className="markdown" children={content} remarkPlugins={[remarkGfm,remarkEmoji]} rehypePlugins={[[rehypePrism],{theme: 'Holi Theme'}]}  />
            </div>
            <div className="divider"></div>

            <div className="text-right">
                <button className="btn-link">
                    <Link href={"/"}>
                        BACK
                    </Link>
                </button>

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const contentwithmeta = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.md`),'utf-8');
    
    const {data:frontmatter, content} = matter(contentwithmeta);
    // console.log(content);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
