import { useContext, useState } from "react";

import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "../cine/CartDetails";

import { MovieContext, ThemeContext } from "../context";

export default function Header() {
  const [showCrt, setShowCart] = useState(false);

  const { cartData } = useContext(MovieContext);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCrt && <CartDetails onClose={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-[#00d991]/20 dark:bg-[#00d991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-[#00d991]/20 dark:bg-[#00d991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="Moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-[#00d991]/20 dark:bg-[#00d991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={ShoppingCart} width="24" height="24" alt="Cart" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]:">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
