import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { allWritings } from "@/content";

export const generateStaticParams = async () => {
  return allWritings.map((post) => ({
    slug: post.slug,
  }));
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage: NextPage<PostPageProps> = ({ params }: PostPageProps) => {
  const post = allWritings.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error(`Post with slug ${params.slug} not found`);
  }

  return (
    <>
      <Head>
        <title>{post?.name}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link
            href="/"
            className="text-center text-sm font-bold uppercase text-purple"
          >
            Home
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.name}</h1>
          <time dateTime={post.date} className="text-sm text-hint">
            {dayjs(post.date).format("MMMM D, YYYY")}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
};

export default PostPage;
