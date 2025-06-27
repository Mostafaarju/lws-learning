import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleClick() {
    console.log("Your Data is Saved!");
  }

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save Progress" : "Reconnecting..."}
    </button>
  );
}
