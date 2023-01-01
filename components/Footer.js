import React from "react";

export default function Footer({ home }) {
  return (
    <footer
      className={`${
        home ? "md:mt-24 xl:mt-[10rem]" : ""
      } p-4 mt-8 bg-base-200 footer footer-center text-neutral`}
    >
      <div>
        <p>Copyright © 2022 - All right reserved by Ivan</p>
      </div>
    </footer>
  );
}
