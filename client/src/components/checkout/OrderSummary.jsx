import Image from "next/image";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const OrderSummary = () => {
  const [items, setItems] = useState([
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
  ]);

  const shippingCost = 60;
  const itemDiscount = 1347;

  const handleQuantityChange = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return subtotal - itemDiscount + shippingCost;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="lg:text-xl font-semibold text-start mb-4">
        Order Summary ({items.length} Items)
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between">
            <Image
              width={50}
              height={50}
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 mx-4">
              <h3 className="lg:text-md font-medium">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
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
              className="text-red-600"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>MRP</span>
          <span>
            ₹{items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Item Discount</span>
          <span className="text-green-600">- ₹{itemDiscount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>₹{shippingCost}</span>
        </div>
        <div className="flex justify-between font-bold lg:text-lg">
          <span>Total Pay</span>
          <span>₹{calculateTotal()}</span>
        </div>
      </div>

      <button className="w-full py-3 mt-4 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border border transition duration-300">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
