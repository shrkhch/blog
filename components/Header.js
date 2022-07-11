import Link from 'next/link';
import ToggleTheme from './ToggleTheme';

export default function Header() {
    return (
            <div className="navbar px-0 bg-base-100">
                <div className="flex justify-between">
                    <a href={'/'} className="text-3xl font-normal">
                        lazuwrite
                    </a>
                <div className="">
                {/* <a href={"/about"}>
                    <span className="font-normal text-md hover:text-stone-400">me</span>
                </a> */}
                </div>
                </div>
            </div>
    );
}