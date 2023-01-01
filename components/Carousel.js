import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel({ data }) {
  return (
    <div className="w-full carousel">
      {data.map((post, index) => (
        <div
          key={`slide${index + 1}`}
          id={`slide${index + 1}`}
          className="relative w-full carousel-item"
        >
          <div className="relative w-full tracking-tighter h-[32rem]">
            <Image
              src={post.image.replace("thumbnail", "large")}
              className="object-cover md:object-fill"
              alt={post.title}
              quality={80}
              priority
              fill
            />
            <div className="absolute w-64 p-8 bg-white shadow-lg left-20 md:w-3/5 lg:w-1/2 2xl:w-1/3 md:left-32 top-32">
              <h1 className="text-xl leading-10 md:text-3xl line-clamp-2">
                {post.title}
              </h1>
              <hr className="my-5 border-2 w-36 border-cyan-500 border-wavy" />
              <p className="mb-3 text-md">
                <span className="font-semibold text-cyan-500">
                  {post.category}
                </span>{" "}
                • {post.pusblised_at}
              </p>
              <Link
                href={`/detailpost/${post.link.replace(
                  "https://jakpost.vercel.app/api/detailpost/",
                  ""
                )}`}
              >
                <span className="font-bold text-white uppercase border-none rounded btn bg-cyan-500 hover:text-cyan-500">
                  Read More
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? data.length : index}`}
              className="bg-white border-none btn btn-circle text-cyan-500"
            >
              ❮
            </a>
            <a
              href={`#slide${index === data.length - 1 ? 1 : index + 2}`}
              className="bg-white border-none btn btn-circle text-cyan-500"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
