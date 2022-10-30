import { ThemeConstants } from "@services/theme/themeConstants";
import { getBlogEntries, getBlogEntry, stripMdFromMarkdownFilename } from "@lib/blogEntries";
import classNames from "classnames";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next/types";
import type { ParsedUrlQuery } from "querystring";

interface IBlogProps {
  content: string;
}

export default function Blog({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={classNames(ThemeConstants.PRIMARY_TEXT_COLOR)}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<IParams>): Promise<GetStaticPropsResult<IBlogProps | null>> {
  if (params) {
    const { content } = await getBlogEntry(params.slug.toLowerCase());
    return {
      props: {
        content,
      },
    };
  } else {
    return {
      props: null,
    };
  }
}

export async function getStaticPaths() {
  const blogs = await getBlogEntries();
  const paths = blogs.map(({ name }) => {
    return {
      params: {
        slug: stripMdFromMarkdownFilename(name),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
