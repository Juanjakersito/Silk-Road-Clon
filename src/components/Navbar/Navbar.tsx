import { useContext } from "react";
import logo from "../../assets/logo.jpg";
import { BsCart4 } from "react-icons/bs";
import "./Navbar.css";
import "../Cart/Cart.css";
import { CartContext } from "../../context/cart";
import { IoLogoBitcoin } from "react-icons/io";

function Navbar({
  searchProducts,
}: {
  searchProducts: (search: string) => void;
}) {
  const { returnNumberOfProducts, showCart, cartProps, updateCartProps } =
    useContext(CartContext);

  function handleSearchClick() {
    const newSearch = document.getElementById(
      "search-input"
    ) as HTMLInputElement;

    if (newSearch.value.length < 3) {
      return alert("enter at least 3 characters to search");
    }

    searchProducts(newSearch.value);
    newSearch.value = "";
  }

  return (
    <>
      <nav>
        <img src={logo} alt="Silk-Road" />

        <section>
          <div className="user position-props">
            Welcome <span className="green">{cartProps?.user}</span>!
          </div>

          <div className="options position-props">
            {/* <span className="green btn">messages(0)</span> <div className="v-line" />
        <span className="green btn">orders(0)</span> <div className="v-line" />
        <span className="green btn">settings</span><div className="v-line" />  */}

            <span className="green btn">
              account(
              <IoLogoBitcoin /> {cartProps?.wallet})
            </span>
            <div className="v-line" />

            <span
              className="green btn"
              onClick={() => {
                updateCartProps && cartProps
                  ? updateCartProps({ ...cartProps, user: null })
                  : "";
              }}
            >
              log out
            </span>
          </div>

          <div className="search-cart position-props">
            <input
              type="text"
              onSubmit={handleSearchClick}
              name=""
              id="search-input"
            />

            <button onClick={handleSearchClick}>search</button>

            <span className="green" onClick={showCart}>
              <label className="cart-button">
                <BsCart4 size={25} />(
                {returnNumberOfProducts ? returnNumberOfProducts() : ""})
              </label>
            </span>
          </div>
        </section>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
