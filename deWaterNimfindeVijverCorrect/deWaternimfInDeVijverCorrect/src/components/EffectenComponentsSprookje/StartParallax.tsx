import { useRef } from "react";

type ParallaxContentProps = {
  imgUrl: string;
};

export const ParallaxContent = ({ imgUrl }: ParallaxContentProps) => {
  const imageRef = useRef(null);

  return (
    <div>
      <div ref={imageRef}>
        <img src={imgUrl} alt="Background" />
      </div>
    </div>
  );
};
