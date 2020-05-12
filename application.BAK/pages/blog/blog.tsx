import React from "react";
import { blogEntriesURL } from "../../utils";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import { trackPromise } from "react-promise-tracker";
import { CodeBlock, LoadingIndicator } from "../../components";
import "./blog.scss";


const Blog: React.FC = () => {
  const [urls, serUrls] = React.useState<string[]>([]);
  const [articles, setArticles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
        trackPromise(
          Axios.get(blogEntriesURL).then((response) => {
            serUrls(response.data);
          })
        ).catch(e => console.error(e))
      }, 550
    )
  }, []);

  React.useEffect(() => {
    urls.forEach((url) => {
      trackPromise(Axios.get(url)
        .then((response) => {
          setArticles(((prevState) => [...prevState, response.data]));
          setLoading(false);
        })).catch(e => console.error(e));
    });
  }, [urls]);

  return (
    <>
      <div className="blog-container">
        {loading && <LoadingIndicator/>}
        {
          articles.map((article, index) => (
            <div className="markdown-body" key={index}>
              <ReactMarkdown
                source={article}
                renderers={{
                  code: CodeBlock,
                }}
              />
            </div>
          ))
        }

      </div>

    </>
  );
};
export { Blog };
