import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About () {
    const intro = "フロントエンドがすきです。";

    return (
        <div className="container mx-auto  bg-slate-700 px-0 rounded-md py-3">
            <Head>
                <title>about</title>
            </Head>
            <div className="text-center text-xl py-5">
                ABOUT
            </div>
            <div className="text-center">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <Image 
                        src="/images/avatar.png"
                        width={100}
                        height={100}
                        alt="avatar"
                    />
                </div>
            </div>
            <div className='py-2'>
                <p>{intro}</p>
            </div>
            <div className="flex justify-center">
                <div className="px-1">
                    <Link href='https://github.com/iykjp'>
                        <a>
                            <Image 
                            src='/images/github.svg' 
                            alt='octcat'
                            width={32}
                            height={32}
                            />
                        </a>
                    </Link>
                </div>
                <div className="px-1">
                    <Link href='https://zenn.dev/kirabug'>
                        <a>
                            <Image 
                            src='/images/zenn.svg' 
                            alt='zenn'
                            width={32}
                            height={32}
                            />
                        </a>
                    </Link>
                </div>
            </div>            
            </div>
        </div>
    );
}