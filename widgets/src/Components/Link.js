import React from "react";

const Link = ({ href, className, children }) => {
  const onCLick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onCLick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
