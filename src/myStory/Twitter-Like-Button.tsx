import { useState } from "react";

interface Props {
  canAnimate?: boolean;
}

export default function TwitterLikeButton(props: Props) {
  const { canAnimate = true } = props;
  const [active, setActive] = useState(false);

  const animateClass = (() => {
    if (canAnimate) {
      return active ? "animate-heart-burst" : "";
    } else {
      return active ? "animate-heart-burst-immediate" : "";
    }
  })();

  return (
    <div
      className={animateClass}
      onClick={() => setActive((v) => !v)}
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
