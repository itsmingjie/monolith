"use client";

import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";

import { allWritings } from "@/content";
import { useHighlight } from "@/lib/utils/highlight";

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
  useHighlight();

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
        <div className="mb-6">
          <h1 className="mb-1 text-3xl font-bold">{post.name}</h1>
          <time dateTime={post.date} className="text-sm text-hint">
            {dayjs(post.date).format("MMMM D, YYYY")}
          </time>
        </div>
        <article className="prose prose-dracula max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
      </article>
    </>
  );
};

export default PostPage;
