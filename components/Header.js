import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  //console.log(router.pathname);
  return (
    <header className="w-full sticky top-0 z-30 bg-base/50 gap-3 mb-3 p-3 backdrop-filter backdrop-blur ">
      <div className="flex justify-center items-center gap-3 px-2">
        <a href={"/"} className={`flex items-center p-1.5 ${router.pathname === "/" ? "bg-[#b0e0e6]" : "hover:underline"}`}>
          <span>Posts</span>
        </a>
        <a href={"/tags"} className={`flex items-center p-1.5 ${router.pathname === "/tags" ? "bg-[#b0e0e6]" : "hover:underline"}`}>
          <span>Tags</span>
        </a>
        <a href={"/about"} className={`flex items-center p-1.5 ${router.pathname === "/about" ? "bg-[#b0e0e6]" : "hover:underline"}`}>
          <span>About</span>
        </a>
        <a href={"/works"} className={`flex items-center p-1.5 ${router.pathname === "/works" ? "bg-[#b0e0e6]" : "hover:underline"}`}>
          <span>Works</span>
        </a>
        <a
          href="https://github.com/shrkhch"
          target="_blank"
          rel="noopener noreferrer"
          className="flex itmes-center hover:underline p-1.5"
        >
          <span>Sources</span>
        </a>
      </div>
    </header>
  );
}
