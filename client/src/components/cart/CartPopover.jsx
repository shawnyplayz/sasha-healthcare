import Image from "next/image";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartPopover = ({ isOpen, closePopover }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Virility ZORGAL",
      price: 1500,
      quantity: 1,
      image: "/Images/ProductCardAssets/Product1.svg",
    },
    {
      id: 2,
      name: "Infertility Ova Boost 1",
      price: 1500,
      quantity: 1,
      image: "/Images/ProductCardAssets/Product2.svg",
    },
    {
      id: 3,
      name: "OVA Boost-4",
      price: 1500,
      quantity: 1,
      image: "/Images/ProductCardAssets/Product3.svg",
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + increment } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={closePopover}
    >
      <div
        className="bg-white w-full sm:w-1/3 max-h-[80vh] ml-auto p-6 transition-transform transform duration-300 ease-in-out overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={closePopover}
            className="text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image
                width={50}
                height={50}
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-gray-500">₹ {item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 border rounded-l"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">
                    {item.quantity}
                  </span>
                  <button
                    className="px-2 py-1 border rounded-r"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-gray-400 hover:text-gray-700"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-gray-700 font-medium">
            <span>Subtotal</span>
            <span>₹ {total}</span>
          </div>
          <p className="text-right text-gray-500 mt-1">You saved ₹ 300</p>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-900">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPopover;
