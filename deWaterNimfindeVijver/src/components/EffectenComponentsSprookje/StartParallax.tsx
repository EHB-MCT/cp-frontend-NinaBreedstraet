import { useRef } from "react";

type ParallaxContentProps = {
  imgUrl: string;
  children: React.ReactNode;
};

export const ParallaxContent = ({ imgUrl, children }: ParallaxContentProps) => {
  const imageRef = useRef(null);

  return (
    <div>
      <div ref={imageRef}>
        <img
          src={imgUrl}
          alt="Background"
        />
      </div>
    </div>
  );
};
