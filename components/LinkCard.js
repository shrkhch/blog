/* eslint-disable @next/next/no-img-element */

const LinkCard = ({ children, cardDatas, href }) => {
  const target = cardDatas.find((meta) => meta.url == href);
  //console.log(children);
  if (target) {
    return (
      <>
      <a href={href} target="_blank" rel="noopener noreferrer" className="not-prose flex items-center hover:text-[#3261ba] no-underline border border-black max-w-lg">
        <img src={target.image} alt={target.title} className="not-prose object-cover  w-36" />
        <span className="not-prose flex flex-col px-1.5">
          <span className="font-bold text-xs whitespace-pre-line">{target.title}</span>
          <span className="text-xs">{target.description.length > 49 ? `${target.description}...` : target.description }</span>
        </span>
      </a>
      </>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="not-prose no-underline text-[#3261ba]">
      {children}
    </a>
  );
};

export { LinkCard };
