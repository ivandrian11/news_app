import React from "react";
import Link from "next/link";

export default function Category({ data }) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-700">Select Category</h1>
      <div className="grid mt-6 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((category) =>
          category.subCategory === null ? (
            <Link
              href={`/category/${category.link.replace(
                "https://jakpost.vercel.app/api/category/",
                ""
              )}`}
              key={category.name}
              className="h-16 p-4 shadow-lg btn"
            >
              {category.name}
            </Link>
          ) : (
            <div key={category.name} className="dropdown">
              <div tabIndex={0} className="w-full h-16 btn">
                {category.name}
              </div>
              <ul
                tabIndex={0}
                className={`${
                  category.subCategory.length <= 2 ? "h-auto" : "h-48"
                } w-full overflow-scroll overflow-x-hidden shadow dropdown-content bg-base-100`}
              >
                {category.subCategory
                  .filter(
                    (sub) =>
                      sub.name !== "Podcast" &&
                      sub.name !== "Commentary" &&
                      sub.name !== "Environment"
                  )
                  .map((sub) => (
                    <Link
                      href={`/category/${sub.link.replace(
                        "https://jakpost.vercel.app/api/category/",
                        ""
                      )}`}
                      key={sub.name}
                    >
                      <li className="px-6 py-3 hover:bg-gray-300">
                        {sub.name}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
