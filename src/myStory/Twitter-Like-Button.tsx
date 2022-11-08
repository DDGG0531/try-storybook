import { useState } from "react";

interface Props {
  canAnimate?: boolean;
}

export default function TwitterLikeButton(props: Props) {
  const { canAnimate = true } = props;

  const [isAnimating, setIsAnimating] = useState(false);

  const animateClass = (() => {
    if (canAnimate) {
      return isAnimating ? "animate-heart-burst" : "";
    } else {
      return isAnimating ? "animate-heart-burst-immediate" : "";
    }
  })();

  return (
    <div
      className={animateClass}
      onClick={() => setIsAnimating(true)}
      // onAnimationEnd={() => setIsAnimating(false)}
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
