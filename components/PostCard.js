import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function PostCard({ data }) {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center mb-1 gap-x-2">
        <div className="relative w-16 h-16">
          <Image
            src={`/api/imageproxy?url=${encodeURIComponent(data.image)}`}
            alt={data.title}
            quality={80}
            priority
            fill
          />
        </div>
        <h1 className="pb-2 text-xl font-medium line-clamp-2">{data.title}</h1>
      </div>
      <ReactMarkdown className="leading-6 tracking-wider text-justify line-clamp-3">
        {data.headline}
      </ReactMarkdown>
    </div>
  );
}
