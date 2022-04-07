import Link from 'next/link';

export default function Header() {
    const blogTitle = "Mocha Talk"
    return (
            <div className="navbar px-0 bg-base-100">
                <div className="flex-1">
                <Link href={"/"}>
                    <a className="link link-primary link-hover normal-case pl-0 text-2xl font-bold border-0">{blogTitle}</a>
                </Link>
                </div>
                <div className="flex-none ">
                <Link href={"/about"}>
                    <a className="link link-secondary link-hover font-medium border-0">ABOUT</a>
                </Link>
                </div>
            </div>
    );
}