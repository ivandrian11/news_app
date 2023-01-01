import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveResults } from "../../states/results/action";
import Layout from "../../containers/Layout";
import LoadingLayout from "../../containers/LoadingLayout";
import PostCard from "../../components/PostCard";

function Search({ router }) {
  const { results = [] } = useSelector((states) => states);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.keyword) {
      dispatch(asyncReceiveResults(router.query.keyword, page));
    }
  }, [router, page, dispatch]);

  if (results.length === 0) {
    return <LoadingLayout />;
  }

  return (
    <>
      <Head>
        <title>
          {router.query.keyword} | page {page}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto mt-8 space-y-4 tracking-tighter">
          <h2 className="text-xl capitalize">
            Hasil untuk &quot;{router.query.keyword}&quot;
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.data.map((post) => (
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
          <div className="flex justify-center mt-2 btn-group">
            {page !== 1 && (
              <button className="btn" onClick={() => setPage(page - 1)}>
                «
              </button>
            )}
            <button className="btn">Page {page}</button>
            {page !== results.pagination.totalPage && (
              <button className="btn" onClick={() => setPage(page + 1)}>
                »
              </button>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default withRouter(Search);
