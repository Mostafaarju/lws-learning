import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  const theme = useContext(ThemeContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <p>My Current Theme is: {theme}</p>
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}
