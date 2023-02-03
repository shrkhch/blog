import Image from "next/image";
import Head from "next/head";

export default function Works() {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <div className="flex flex-col justify-center items-center mx-1">
      <h1 className="text-3xl pb-5 underline underline-offset-8 decoration-2">Works</h1>
      <a href="https://wordwolf-mtg.vercel.app/" className="">
      <img
        src="/images/workimages/wordwolf.png"
        width={500}
        height={500}
        alt="wordwolf"
        className="rounded-xl"
      />
      </a>
      </div>
    </>
  );
}
