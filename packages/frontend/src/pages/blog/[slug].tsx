import { ThemeConstants } from "@services";
import { getBlogEntries, getBlogEntry, replaceWhitespaceWithDash } from "@lib";
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
  const paths = blogs.map(({ title }) => {
    return {
      params: {
        slug: replaceWhitespaceWithDash(title),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
