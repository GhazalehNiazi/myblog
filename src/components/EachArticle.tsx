import { useParams } from "react-router-dom";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import markdown from "../markdown/markdown.md";

function EachArticle() {
  let params = useParams();
  console.log(params.id);

  const [markdowntext, setMarkdwontext] = useState("");

  fetch(markdown)
    .then((response) => response.text())
    .then((text) => {
      setMarkdwontext(text);
    });

  return (
    <div className="bg-zinc-600 overflow-y-auto lg:max-h-min lg:mx-12  lg:grow lg:justify-self-center lg:self-start lg:m-3 ">
      {" "}
      <Markdown className="text-zinc-50 prose">{markdowntext}</Markdown>
    </div>
  );
}

export default EachArticle;
