import { useRef } from "react";
import useFadeInAnimation from "../hooks/useFadeInAnimation";

export default function Welcome() {
  const ref = useRef(null);

  useFadeInAnimation(ref, 1000);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}
