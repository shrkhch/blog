import Link from 'next/link';

export default function Header() {
    return (
            <div className="navbar px-0 bg-base-100">
                <div className="flex justify-between">
                <Link href={"/"}>
                    <a className="normal-case pl-0 text-2xl font-normal border-0 font-serif">
                        <div className="flex flex-col justify-start">
                            <div className="flex-none inline-block">MOCHA</div>
                            <div className="flex-none inline-block text-left pl-7 ml-7">TALK</div>
                        </div>
                        </a>
                </Link>
                <div className="flex-auto text-right">
                <Link href={"/about"}>
                    <a className="text-lg font-serif">ABOUT</a>
                </Link>
                </div>
                </div>
            </div>
    );
}