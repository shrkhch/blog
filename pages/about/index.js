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
            <div className='py-3 px-3 text-left'>
                <p>{intro}</p>
                <div className="divider"></div>
                <p className="font-bold text-center">アクセス解析</p>
                <p>このサイトはGoogle Analyticsを利用しています。</p>
                <p>Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。</p>
                <p>Google Analyticsでデータが収集、処理される仕組みについては、以下の公式ページをご参照ください。</p>
                <a className="link link-primary" href="https://policies.google.com/technologies/partner-sites?hl=ja">GOOGLE のサービスを使用するサイトやアプリから収集した情報の GOOGLE による使用</a>
            </div>
            <div className="flex justify-center py-2">
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