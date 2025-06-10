import { useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  return (
    <>
      <h1>Time Passed:</h1>
      <button>Start</button>
    </>
  );
}
