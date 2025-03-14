import { useState } from "react";
import styled from "styled-components";

interface StyledImageProps {
    hasBorder?: boolean;
  }

const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  margin: 10px;
  border: ${(props) => (props.hasBorder ? "5px solid #E47676" : "none")};
  padding: 10px;
  filter: blur(10px);
  transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 0;

  &.loaded {
    filter: blur(0);
    opacity: 1;
  }
`;

export const LazyImage = ({ src, alt, hasBorder }: { src: string; alt: string; hasBorder?: boolean }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    return (
      <StyledImage
        src={src}
        alt={alt}
        loading="lazy"
        className={isLoaded ? "loaded" : ""}
        hasBorder={hasBorder}
        onLoad={() => setIsLoaded(true)}
      />
    );
  };
  