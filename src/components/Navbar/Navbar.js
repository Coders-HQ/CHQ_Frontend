import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

export default function Navbar({ brand, items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleRouteChange = (url) => {
      const newActiveIndex = items.findIndex((item) => item.url === url);

      setActiveIndex(newActiveIndex);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    // Force first update
    handleRouteChange(Router.route);

    return () => Router.events.off("routeChangeComplete", handleRouteChange);
  }, [items]);

  return (
    <nav className="navbar">
      <div className="brand">{brand}</div>
      <div className="items">
        {items.map((item, index) => (
          <Link
            href={item.url}
            active={activeIndex === index ? "active" : undefined}
            key={item.id}
            className="item"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
