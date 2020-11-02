import React from 'react';
import './blog-entry.scss';
import { LoadingIndicator } from '@components';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@components';
import Axios from 'axios';
import { encodeStringToTURL, replaceNumberIndents } from '@utils';

type Chapter = {
  title: string;
  subChapters?: Map<number, Chapter>;
};

function recursiveList(line: Chapter) {
  const { title, ...rest } = line;
  if (title) {
    const hasSubChapters = Object.keys(rest).length !== 0;
    return (
      <li key={title}>
        <a href={`#${encodeStringToTURL(title)}`}>{title.replace(replaceNumberIndents(), '')}</a>

        {hasSubChapters ? <ol>{Object.values(rest).map((value) => recursiveList(value))}</ol> : ''}
      </li>
    );
  }
}

function insertChapterIntoTableOfContents(TOC: any, indentLevels: number[], text: string): any {
  indentLevels.forEach((value, index) => {
    if (TOC[value]?.title === undefined) {
      TOC[value] = { title: text.trim() };
    } else {
      insertChapterIntoTableOfContents(TOC[value], indentLevels.slice(index + 1), text);
    }
  });
  return TOC;
}

type Props = {
  url: string;
};

const BlogEntry: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [article, setArticle] = React.useState<string>('');
  React.useMemo(() => {
    Axios.get(props.url)
      .then((response) => {
        setArticle(() => {
          return response.data;
        });
        setIsLoading(() => false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ReactMarkdown
          source={article}
          renderers={{
            root: ({ children }) => {
              let title = '';
              const customRootElementsToRemove: string[] = [];
              const outline = children.reduce((tableOfContents: any, { key, props }: { key: string; props: any }) => {
                // Skip non-headings
                const { level } = props;
                if (level === 1) {
                  title = props.children[0].props.value;
                }
                // skip if the current element is not a heading
                if (key.indexOf('heading') !== 0 || level > 3 || level < 2) {
                  return tableOfContents;
                }
                // Indent by two spaces per heading level after h1
                let indent = '';
                for (let idx = 1; idx < level; idx++) {
                  indent = `${'#'.repeat(level)}  `;
                }
                // generate table of contents
                const text: string = props.children[0].props.value;
                const chapterTitle = text.replace(replaceNumberIndents(), '');
                const chapterLocationByIndex = text
                  .replace(new RegExp(/(?![\d.])+.*/g), '')
                  .split('.')
                  .filter((e) => e.length > 0)
                  .map((e) => +e);
                if (tableOfContents !== undefined) {
                  tableOfContents = insertChapterIntoTableOfContents(
                    tableOfContents,
                    chapterLocationByIndex,
                    chapterTitle
                  );
                }
                return tableOfContents;
              }, {});

              // render description
              const description = children[1].props.children.map((child: any) => {
                if (child.props.value) {
                  return child.props.value;
                } else if (child.props.href) {
                  return (
                    <a key={Math.random().toString(36)} href={child.props.children[0].props.value}>
                      {child.props.children[0].props.value}
                    </a>
                  );
                }
              });
              //render author
              const author = children[2].props.children.map((child: any) => {
                return (
                  <p key={Math.random().toString(36)}>
                    <strong>{child.props.children[0].props.value}</strong>
                  </p>
                );
              });

              // render datePublished
              const datePublished = children[3].props.children.map((child: any) => {
                return (
                  <p key={Math.random().toString(36)}>
                    <strong>{child.props.children[0].props.value}</strong>
                  </p>
                );
              });

              // render dateEdited
              const dateEdited = children[4].props.children.map((child: any) => {
                return (
                  <p key={Math.random().toString(36)}>
                    <strong>{child.props.children[0].props.value}</strong>
                  </p>
                );
              });

              // remove custom rendered elements (title, description, date published  dated edited)
              children.forEach((child: any, index: number) => {
                if (index < 5) {
                  customRootElementsToRemove.push(child.key);
                }
              });
              const updatedChildren = children.filter((child: any) => {
                return !customRootElementsToRemove.includes(child.key);
              });

              return (
                <div className="markdown-body">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <br />
                  <p>{author}</p>
                  <p>{datePublished}</p>
                  <p>{dateEdited}</p>
                  <h3>Table of Contents: </h3>
                  <ol className={'outer'}>
                    {Object.values(outline).map((line) => {
                      return recursiveList(line as Chapter);
                    })}
                  </ol>
                  {updatedChildren}
                </div>
              );
            },
            code: CodeBlock,
            heading: ({ level, children }) => {
              const anchorName = encodeStringToTURL(
                children[0].props.children.toString().replace(replaceNumberIndents(), '')
              );

              switch (level) {
                case 1: {
                  return (
                    <h1>
                      <a id={`${anchorName}`}>{children}</a>
                    </h1>
                  );
                }
                case 2: {
                  return (
                    <h2>
                      <a id={`${anchorName}`}>{children}</a>
                    </h2>
                  );
                }
                case 3: {
                  return (
                    <h3>
                      <a id={`${anchorName}`}>{children}</a>
                    </h3>
                  );
                }
                case 4: {
                  return <h4>{children}</h4>;
                }
                case 5: {
                  return <h5>{children}</h5>;
                }
                default: {
                  return <div>{children}</div>;
                }
              }
            },
          }}
        />
      )}
    </>
  );
};
export default React.memo(BlogEntry);
