import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import logVisit from "../utils/logVisit";
import shopingCartContext from "../context/shoppingCartContext";

export default function Page({ url, onPageChange, onAddItems }) {
  const items = useContext(shopingCartContext);

  const numberOfItems = items.length;

  const onVisit = useEffectEvent((url) => {
    logVisit(url, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <div>This is Page</div>
      <div>
        <button onClick={onPageChange}>Change Page</button>
        <button onClick={onAddItems}>Add New Item</button>
      </div>
      <div>Total Items in Cart {numberOfItems} </div>
    </div>
  );
}
