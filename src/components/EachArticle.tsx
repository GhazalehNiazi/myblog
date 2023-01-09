import React from "react";
import { useParams } from "react-router-dom";

function EachArticle() {
  let params = useParams();
  console.log(params.id);
  return <div>EachArticle</div>;
}

export default EachArticle;
