import Image from "next/image";
import Head from "next/head";
import { withRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveDetails } from "../../states/details/action";
import ReactMarkdown from "react-markdown";
import Layout from "../../containers/Layout";
import LoadingLayout from "../../containers/LoadingLayout";

function Detail({ router }) {
  const { details = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.slug) {
      dispatch(asyncReceiveDetails(router.query.slug.join("/")));
    }
  }, [router, dispatch]);

  if (!details) {
    return <LoadingLayout />;
  }

  return (
    <>
      <Head>
        <title>{details.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto mt-8 space-y-4 tracking-tighter">
          <h1 className="text-3xl font-bold text-center text-neutral">
            {details.title}
          </h1>
          <div className="flex justify-center gap-x-6">
            <div className="flex items-center gap-x-1">
              {/* prettier-ignore */}
              <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              <span className="text-sm">{details.author}</span>
            </div>
            <div className="flex items-center gap-x-1">
              {/* prettier-ignore */}
              <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              <span className="text-sm">{details.location}</span>
            </div>
            <div className="flex items-center gap-x-1">
              {/* prettier-ignore */}
              <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
              <span className="text-sm">{details.pusblised_at}</span>
            </div>
          </div>
          <div className="relative w-full lg:w-3/4 h-80 lg:h-[32rem] mx-auto">
            <Image
              src={`/api/imageproxy?url=${encodeURIComponent(details.image)}`}
              className="object-cover md:object-fill"
              alt={details.image_desc}
              quality={80}
              priority
              fill
            />
          </div>
          <ReactMarkdown className="w-full mx-auto leading-7 tracking-wider text-justify lg:w-3/4">
            {details.post_content}
          </ReactMarkdown>
        </div>
      </Layout>
    </>
  );
}

export default withRouter(Detail);
