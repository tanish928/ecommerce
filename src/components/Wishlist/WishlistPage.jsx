import React from 'react';

const WishlistPage = ({ wishlistItems, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => onRemoveFromWishlist(item.id)}
                  className="text-red-600 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
