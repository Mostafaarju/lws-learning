import { useRef } from "react";
import MyInput from "./MyInput";

export default function FormHireorderComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput text="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
