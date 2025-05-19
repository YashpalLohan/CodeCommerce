import React, { useState } from "react";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

const Checkout = () => {
    const { cart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("razorpay");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * 30 * item.quantity, 0);
    };

    const shippingFee = 100; // Fixed shipping fee
    const total = calculateSubtotal() + shippingFee;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, street, city, state, zipcode, country, phone } = formData;

        if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
            toast.error("All fields are required.", { position: "top-right" });
            return false;
        }

        if (!email.includes("@")) {
            toast.error("Invalid email address.", { position: "top-right" });
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            toast.error("Phone number must be 10 digits.", { position: "top-right" });
            return false;
        }

        return true;
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) return;

        if (paymentMethod === "razorpay") {
            const paymentSuccess = await handleRazorpayPayment();
            if (paymentSuccess) {
                toast.success("Order placed successfully!", { position: "top-right" });
            } else {
                toast.error("Payment failed. Please try again.", { position: "top-right" });
            }
        } else {
            toast.success("Order placed successfully!", { position: "top-right" });
        }
    };

    const handleRazorpayPayment = () => {
        return new Promise((resolve, reject) => {
            const options = {
                key: "rzp_test_2kzfvQ8Szr3XhB", // Replace with your Razorpay key
                amount: total * 100, // Amount in paise
                currency: "INR",
                name: "CodeCommerce",
                description: "Order Payment",
                handler: (response) => {
                    if (response.razorpay_payment_id) {
                        toast.success("Payment successful!", { position: "top-right" });
                        resolve(true); // Resolve the promise on success
                    } else {
                        toast.error("Payment failed.", { position: "top-right" });
                        reject(false); // Reject the promise on failure
                    }
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.on("payment.failed", (response) => {
                toast.error("Payment failed. Please try again.", { position: "top-right" });
                reject(false); // Reject the promise on failure
            });
            razorpay.open();
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-8">
                DELIVERY <span className="text-black font-bold">INFORMATION</span>
                <hr className="mt-2 w-24 border-t-2 border-black" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Delivery Information Form */}
                <div className="lg:col-span-2">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        />
                        <input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={formData.street}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full md:col-span-2"
                            required
                        />
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        >
                            <option value="">Select State</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                        </select>
                        <input
                            type="text"
                            name="zipcode"
                            placeholder="Zipcode"
                            value={formData.zipcode}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        />
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full"
                            required
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border px-4 py-3 rounded w-full md:col-span-2"
                            required
                        />
                    </form>
                </div>

                {/* Cart Totals and Payment Method */}
                <div>
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
                                <span className="font-bold">₹{total}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">
                            PAYMENT <span className="text-black font-bold">METHOD</span>
                            <hr className="mt-2 w-16 border-t-2 border-black" />
                        </h3>
                        <div className="space-y-4">
                            {/* Razorpay Payment Option */}
                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="razorpay"
                                    checked={paymentMethod === "razorpay"}
                                    onChange={() => setPaymentMethod("razorpay")}
                                    className="w-5 h-5"
                                />
                                <img
                                    src="https://razorpay.com/assets/razorpay-glyph.svg" // Razorpay logo URL
                                    alt="Razorpay"
                                    className="w-10 h-auto"
                                />
                                <span>Razorpay</span>
                            </label>

                            {/* Cash on Delivery Option */}
                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMethod === "cash"}
                                    onChange={() => setPaymentMethod("cash")}
                                    className="w-5 h-5"
                                />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png" // Cash logo URL
                                    alt="Cash on Delivery"
                                    className="w-10 h-auto"
                                />
                                <span>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 transition"
                    >
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;