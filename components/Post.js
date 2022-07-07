/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import twemoji from 'twemoji'
import Image from 'next/image'

export default function Post({post}) {
    // const codepoint = twemoji.convert.toCodePoint(post.frontmatter.cover_image);
    // const url = `https://twemoji.maxcdn.com/v/latest/svg/${codepoint.split('-')[0]}.svg`;
    let tag_flag = false;
    if(post.frontmatter.tags !== null){
        tag_flag = true;
    }
    if(tag_flag == true) {
        return (
            <>  
                <div>
                    <a href={`/blog/${post.slug}`}>
                    <div className="text-center rounded-md border shadow-md hover:bg-slate-100">
                        <h3 className="text-md  p-3">{post.frontmatter.date}</h3>
                            <h2 className="inline-block text-xl no-underline pb-3">{post.frontmatter.title}</h2>
                    </div>
                    </a>
                </div>
                    {/* <div className="flex">
                        {
                        post.frontmatter.tags.map((t,index) => {
                                return <span key={index} className="badge badge-success badge-outline mx-1 my-1">{t}</span>
                            }
                        )}
                    </div> */}

            </>
        );
    } else {
        return (
            <>
                {/* <div className="card card-compact lg:card-side p-1 shadow-lg">
                    <figure className="p-2"><Image src={url}  width={50} height={50} priority={true} alt={'coverImage'} /></figure>
                    <div className="card-body items-center place-content-center">
                    <Link href={`/blog/${post.slug}`}>
                        <h2 className="card-title link">{post.frontmatter.title}</h2>
                    </Link>
                        <h3>{post.frontmatter.date}</h3>
                    </div>
                </div> */}
            </>
        );
    }
}