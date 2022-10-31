import React, { Fragment } from "react";
import Footer from "./Footer";
import Navabar from "./Navabar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navabar />
      <div className="pt-40">{children}</div>
      <Footer />
    </Fragment>
  );
}
