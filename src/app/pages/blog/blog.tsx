import React from 'react';
import { blogEntriesURL, replaceWhiteSpace } from '@utils';
import Axios from 'axios';
import { BlogEntry, Card, LoadingIndicator } from '@components';
import './blog.scss';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { BlogEntryProperties } from '../../types';

type MergedURLs = {
  local: string;
  remote: string;
};
const Blog: React.FC = () => {
  const [blogEntriesMeta, setBlogEntriesMeta] = React.useState<BlogEntryProperties[]>();
  const [URLs, setURLs] = React.useState<MergedURLs[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const match = useRouteMatch();
  React.useMemo(() => {
    Axios.get(blogEntriesURL)
      .then((response) => {
        setBlogEntriesMeta(() => {
          return response.data;
        });
        setIsLoading(() => false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  React.useMemo(() => {
    if (blogEntriesMeta) {
      setURLs(() => {
        return blogEntriesMeta.map((e) => {
          return {
            local: `${match.url}/${e.title.replace(replaceWhiteSpace(), '-')}`,
            remote: e.url,
          };
        });
      });
    }
  }, [blogEntriesMeta]);

  return (
    <>
      <div className="blog-container">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          blogEntriesMeta?.map((entry) => {
            return (
              <Link
                to={`${match.url}/${entry.title.replace(replaceWhiteSpace(), '-')}`}
                className="card"
                key={entry.url}
              >
                <Card key={entry.url} title={entry.title} published={entry.published}></Card>
              </Link>
            );
          })
        )}
      </div>
      <Switch>
        {URLs?.map((url) => (
          <Route path={url.local} key={url.remote}>
            <BlogEntry url={url.remote} />
          </Route>
        ))}
      </Switch>
    </>
  );
};
export default Blog;
