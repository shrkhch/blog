import Header from "./Header";
import Fotter from "./Fotter";
import Head from "next/head";

export default function Layout ({children}) {
    return (
        <>
            <div className="mx-auto max-w-3xl py-3 sm:px-6 md:max-w-2xl xl:max-w-3xl xl:px-0">
                <Head>
                    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>☕</text></svg>">
                    </link> 
                </Head>
                <Header />
                <main className="py-5">{children}</main>
            </div>
        </>
    );
}