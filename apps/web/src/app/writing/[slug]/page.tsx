import Head from "next/head";
import Link from "next/link";
import { allWritings } from "@/content";
import dayjs from "dayjs";

export async function generateStaticParams() {
  return allWritings.map((post) => ({
    slug: post.slug,
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = ({ params }: PostPageProps) => {
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
            className="text-blue-700 text-center text-sm font-bold uppercase"
          >
            Home
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.name}</h1>
          <time dateTime={post.date} className="text-slate-600 text-sm">
            {dayjs(post.date).format("MMMM D, YYYY")}
          </time>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostPage;
