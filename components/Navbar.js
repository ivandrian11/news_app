import React, { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function Navbar() {
  // const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (keyword !== "") {
      // router.push(`/search/${keyword}`);
      window.location = `/search/${keyword}`;
    }
  };

  const handleChange = (e) => setKeyword(e.target.value);

  return (
    <div className="sticky top-0 z-50 bg-neutral navbar">
      <div className="flex-1">
        <Link
          href="/"
          className="space-x-2 text-xl text-white normal-case btn btn-ghost"
        >
          {/* prettier-ignore */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
          <span className="hidden md:block">NewsApp</span>
        </Link>
      </div>
      <form className="form-control" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          className="input input-bordered"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
