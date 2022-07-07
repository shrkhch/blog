import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About () {
    return (
        <div className="container mx-auto rounded-sm py-3">
            <Head>
                <title>About</title>
            </Head>
            <div className="flex flex-col items-center">
                    {/* <div className="rounded-md w-24">
                        <Image 
                            src="/images/avatar.png"
                            width={100}
                            height={100}
                            alt="avatar"
                            className="rounded-full"
                        />
                    </div> */}
                    <div className="flex">
                        <strong>Notes:</strong>
                        <span className="font-medium">備忘録として活用したり、気づいた事などを記録するブログです。</span>
                    </div>
                    <div>
                    <a href="https://store.steampowered.com/app/914800/Coffee_Talk/?l=japanese" className="text-emerald-500">Coffee Talk</a>
                    、散歩、MTG(Pauper)を軸に生活が回っています。
                    </div>
                    <div></div>
            </div>
            {/* <div className="flex justify-center py-2">
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
            */}
        </div>
    );
}
