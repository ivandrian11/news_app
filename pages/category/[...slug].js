import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceivePosts } from "../../states/posts/action";
import ReactMarkdown from "react-markdown";
import LoadingLayout from "../../containers/LoadingLayout";
import Layout from "../../containers/Layout";
import PostCard from "../../components/PostCard";

function Posts({ router }) {
  const { posts = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.slug) {
      dispatch(asyncReceivePosts(router.query.slug.join("/")));
    }
  }, [router, dispatch]);

  if (posts.length === 0) {
    return <LoadingLayout />;
  }

  return (
    <>
      <Head>
        <title>News App | {router.query.slug.slice(-1)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto mt-8 space-y-4 tracking-tighter">
          <h2 className="text-xl capitalize">
            Category: {router.query.slug.slice(-1)}
          </h2>
          <div className="relative w-full h-80 lg:h-[32rem] mx-auto">
            <Image
              src={posts.featured_post.image}
              className="object-cover md:object-fill"
              alt={posts.featured_post.title}
              quality={80}
              priority
              fill
            />
          </div>
          <div className="pb-4 border-b">
            <h1 className="text-2xl font-bold">{posts.featured_post.title}</h1>
            <ReactMarkdown className="mt-2 mb-1 leading-7 tracking-wider text-justify">
              {posts.featured_post.headline}
            </ReactMarkdown>
            <Link
              href={`/detailpost/${posts.featured_post.link.replace(
                "https://jakpost.vercel.app/api/detailpost/",
                ""
              )}`}
            >
              <span className="font-bold text-white uppercase border-none rounded btn bg-cyan-500 hover:text-cyan-500">
                Read More
              </span>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.posts.map((post) => (
              <Link
                key={post.title}
                href={`/detailpost/${post.link.replace(
                  "https://jakpost.vercel.app/api/detailpost/",
                  ""
                )}`}
              >
                <PostCard data={post} />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default withRouter(Posts);
