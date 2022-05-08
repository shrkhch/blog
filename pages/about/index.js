import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About () {
    return (
        <div className="container mx-auto bg-gray-100 rounded-sm py-3">
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
                    、散歩、MTG(Pauper)を軸に生活が回っています。Rest in Peace Fahmi.
                    </div>
                    <div></div>
            </div>
            {/* <div className='py-3 px-3 '>
                <div className="divider"></div>
                <p className="font-bold text-lg text-center">Google Analytics</p>
                <p>このサイトはGoogle Analyticsを利用しています。</p>
                <p>Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。</p>
                <p>Google Analyticsでデータが収集、処理される仕組みについては以下の公式ページをご参照ください。</p>
                「<a className="font-light text-indigo-600" href="https://policies.google.com/technologies/partner-sites?hl=ja">
                    GOOGLE のサービスを使用するサイトやアプリから収集した情報の GOOGLE による使用</a>」
            </div> */}
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