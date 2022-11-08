import React, { useState } from "react";

export default function TwitterLikeButton() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div
      className={isAnimating ? "animate-heart-burst" : ""}
      onClick={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
      style={{
        cursor: "pointer",
        height: "50px",
        width: "50px",
        backgroundImage: `url(/sprite.png)`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "2900%",
      }}
    ></div>
  );
}
