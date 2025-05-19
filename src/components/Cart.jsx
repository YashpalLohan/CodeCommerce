import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * 30 * item.quantity, 0);
    };

    const shippingFee = 100; 

    const handleQuantityChange = (productId, size, quantity) => {
        if (quantity < 1) return; // Prevent quantity from going below 1
        updateQuantity(productId, size, quantity);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-8">
                YOUR <span className="text-black font-bold">CART</span>
                <hr className="mt-2 w-24 border-t-2 border-black" />
            </h2>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <ul className="space-y-6">
                            {cart.map((item) => (
                                <li
                                    key={`${item.id}-${item.size}`}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover border rounded"
                                        />
                                        <div>
                                            <h4 className="font-medium">{item.title}</h4>
                                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p className="font-semibold">
                                            ₹{item.price * 30 * item.quantity}
                                        </p>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    item.id,
                                                    item.size,
                                                    parseInt(e.target.value)
                                                )
                                            }
                                            className="w-12 border text-center"
                                        />
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FiTrash size={20} /> {/* Bin icon */}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-gray-50 p-6 rounded shadow-md">
                        <h3 className="text-lg font-semibold mb-4">
                            CART <span className="text-black font-bold">TOTALS</span>
                            <hr className="mt-2 w-16 border-t-2 border-black" />
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-semibold">₹{calculateSubtotal()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping Fee</span>
                                <span className="font-semibold">₹{shippingFee}</span>
                            </div>
                            <div className="flex justify-between border-t pt-4">
                                <span className="text-gray-800 font-semibold">Total</span>
                                <span className="font-bold">
                                    ₹{calculateSubtotal() + shippingFee}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/checkout")}
                            className="w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 transition"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;