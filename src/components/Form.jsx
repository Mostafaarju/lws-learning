import { useState } from "react";

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundCalssName = "background";
  let pictureCalssName = "picture";

  if (isActive) {
    pictureCalssName += "picture--active";
  } else {
    backgroundCalssName += "background--active";
  }

  return (
    <div className={backgroundCalssName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureCalssName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
