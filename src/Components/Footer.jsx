import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>Tasty TV</div>
      <div> Copyright @ {year}</div>
    </footer>
  );
}

export default Footer;
