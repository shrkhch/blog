import { Prism as Syntaxhighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ inline, className, children }) {
  if (inline) {
    return <code>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  return (
    <Syntaxhighlighter
      style={nord}
      language={lang}
      codeTagProps={{
        style: {
          fontFamily: "M PLUS Rounded 1c",
        },
      }}
      customStyle={{
        fontFamily: "M PLUS Rounded 1c"
      }}
    >
      {String(children).replace(/\n$/, "")}
    </Syntaxhighlighter>
  );
}
