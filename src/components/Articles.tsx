import Article from "./Article";
import { Helmet } from "react-helmet";

function Articles() {
  return (
    <div className=" overflow-y-auto lg:max-h-min lg:mx-12  lg:grow lg:justify-self-center lg:self-start lg:m-3 ">
      <Helmet>
        <title>مقاله‌ها</title>
      </Helmet>

      <div className=" lg:p-4">
        <Article
          id={1}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={2}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={3}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={4}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={5}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={5}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          id={5}
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
      </div>
    </div>
  );
}

export default Articles;
