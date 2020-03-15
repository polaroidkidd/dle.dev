import React from "react";
import { blogEntriesURL } from "../../utils";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import { trackPromise } from "react-promise-tracker";
import { LoadingIndicator } from "../../components/loading-indicator";
import "./blog.scss";
import { CodeBlock } from "../../components/markdown-renderer";

const Blog: React.FC = () => {
  const [urls, serUrls] = React.useState<string[]>([]);
  const [articles, setArticles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    trackPromise(
      Axios.get(blogEntriesURL).then((response) => {
        serUrls(response.data);
      })
    ).catch(e => console.error(e));
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
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {loading && <LoadingIndicator/>}
        {
          articles.map((article) => (
            <div className="markdown-body">
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
