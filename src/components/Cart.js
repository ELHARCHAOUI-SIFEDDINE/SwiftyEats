import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove }) => (
  <div className="flex justify-between items-center py-2 border-b">
    <div className="flex items-center">
      <img
        src={IMG_URL + item.card.info.imageId}
        alt={item.card.info.name}
        className="w-12 h-12 object-cover rounded mr-2"
      />
      <div>
        <h3 className="font-semibold text-sm">{item.card.info.name}</h3>
        <p className="text-xs text-gray-500">
          {item.card.info.isVeg ? "🥬 Veg" : "🍖 Non-Veg"}
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <span className="font-bold text-sm mr-2">
        ₹
        {((item.card.info.price || item.card.info.defaultPrice) / 100).toFixed(
          2
        )}
      </span>
      <button
        onClick={() => onRemove(item)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        🗑️
      </button>
    </div>
  </div>
);

const EmptyCart = () => (
  <div className="text-center py-8">
    <div className="text-4xl mb-4">🛒</div>
    <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
    <p className="text-gray-500 text-sm mb-4">
      Looks like you haven't added anything to your cart yet.
    </p>
    <Link to="/" className="text-blue-500 hover:text-blue-700">
      Go to Home
    </Link>
    <div className="mt-4 text-2xl">
      <span className="mr-2">🍕</span>
      <span className="mr-2">🍔</span>
      <span className="mr-2">🍟</span>
      <span>🥗</span>
    </div>
  </div>
);

const PaymentSuccess = ({ onClose }) => (
  <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 transition-all duration-500 ease-in-out">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-3xl mr-4">✅</span>
        <div>
          <h3 className="font-bold text-lg">Payment Successful!</h3>
          <p className="text-sm">Thank you for your order.</p>
        </div>
      </div>
      <div>
        <Link
          to="/"
          className="bg-white text-green-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-100 transition-colors duration-200"
          onClick={onClose}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + (item.card.info.price || item.card.info.defaultPrice) / 100,
    0
  );

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
      dispatch(clearCart());
      setTimeout(() => setPaymentSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-3 border-b">
            <h2 className="text-xl font-bold text-center flex items-center justify-center">
              <span className="mr-2">🛒</span> Your Cart
            </h2>
          </div>
          {paymentSuccess && (
            <PaymentSuccess onClose={() => setPaymentSuccess(false)} />
          )}
          <div className="p-3">
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    onRemove={handleRemoveItem}
                  />
                ))}
                <div className="mt-4 text-right">
                  <span className="text-lg font-bold">
                    Total: ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="p-3 bg-gray-50 flex justify-between">
            <button
              onClick={handleClearCart}
              disabled={cartItems.length === 0}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <span className="mr-1">🗑️</span> Clear
            </button>
            <button
              onClick={handlePayment}
              disabled={cartItems.length === 0 || isLoading}
              className={`px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <span className="mr-1">💳</span> Pay
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
