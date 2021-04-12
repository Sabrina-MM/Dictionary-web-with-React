import React from "react";

import "../css/ScrollToTop.css";

export default function ScrollToTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Scroll-to-top">
      <p className="text-center">
        <i onClick={goToTop} className="fas fa-angle-double-up fs-4 p-2"></i>
      </p>
    </div>
  );
}
