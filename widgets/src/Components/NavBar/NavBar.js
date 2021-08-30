import React from "react";

import Link from "../Link";

const NavBar = ({ path }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className={`item`}>
        Home
      </Link>
      <Link href="/translate" className={`item`}>
        Translate
      </Link>
      <Link href="/wikisearch" className={`item`}>
        WikiSearch
      </Link>
    </div>
  );
};

export default NavBar;
