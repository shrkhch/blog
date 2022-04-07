import Header from "./Header";
import Fotter from "./Fotter";

export default function Layout ({children}) {
    return (
        <>
            <div className="mx-auto max-w-3xl py-3 px-5 sm:px-6 md:max-w-2xl xl:max-w-3xl xl:px-0">
                <Header />
                <main className="py-5">{children}</main>
            </div>
        </>
    );
}