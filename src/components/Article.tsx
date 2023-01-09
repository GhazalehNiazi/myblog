import React from "react";
import { Link} from "react-router-dom";

function Article({
  title,
  date,
  genre,
  id,
}: {
  title: string;
  date: string;
  genre: string;
  id: number;
}) {


  return (
    <Link to={`/article/${id}`}>
    <div
      className="border border-neutral-700 px-3 py-3 mx-5 my-2 bg-neutral-900 text-slate-100"

    >
      <div className="text-violet-500 text-normal">
        <span>{date}</span>
      </div>
      <div className="text-lg mb-3 mt-2">
        <h1>{title}</h1>
      </div>
      <div className="underline  tracking-widest text-slate-300">{genre}</div>
    </div>
      </Link>
  );
}

export default Article;
