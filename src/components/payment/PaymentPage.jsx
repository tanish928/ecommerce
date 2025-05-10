import React, { useState } from 'react';

const PaymentPage = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    upi: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment submitted via ${paymentMethod.toUpperCase()} (simulated)`);
    console.log('Payment Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Billing Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Shipping Address"
          required
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={handleChange}
        />

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {paymentMethod === 'card' && (
          <>
            <input
              name="cardNumber"
              type="text"
              placeholder="Card Number"
              className="w-full border p-2 rounded"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <input
                name="expiry"
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border p-2 rounded"
                value={formData.expiry}
                onChange={handleChange}
              />
              <input
                name="cvc"
                type="text"
                placeholder="CVC"
                className="w-1/2 border p-2 rounded"
                value={formData.cvc}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <input
            name="upi"
            type="text"
            placeholder="Enter UPI ID (e.g., name@bank)"
            className="w-full border p-2 rounded"
            value={formData.upi}
            onChange={handleChange}
          />
        )}

        {paymentMethod === 'cod' && (
          <p className="text-green-600 font-semibold">You will pay in cash upon delivery.</p>
        )}

        {paymentMethod === 'other' && (
          <p className="text-yellow-600 font-semibold">Other payment methods will be available soon.</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>

      {/* Order Summary */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
