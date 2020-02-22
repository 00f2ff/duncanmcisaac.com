import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else { // todo: decide what kind of consistent header I want to provide.
    // header = (
    //   <h3>
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`,
    //       }}
    //       to={`/`}
    //     >
    //       {title}
    //     </Link>
    //   </h3>
    // )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        {/* todo: add footer styling elsewhere */}
        © {new Date().getFullYear()} Duncan McIsaac
      </footer>
    </div>
  )
}

export default Layout
