import React, { useState, useEffect} from "react";
import './Cart.css';

function Carlist({ carts, deleteCart  }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [uniqueCarts, setUniqueCarts] = useState([]);
  const calculateTotals = (updatedCarts) => {
    const newTotalPrice = updatedCarts.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    const newTotalQuantity = updatedCarts.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setTotalPrice(newTotalPrice);
    setTotalQuantity(newTotalQuantity);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Map over uniqueCarts and update the quantity for the specific product
    const updatedCarts = uniqueCarts.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setUniqueCarts(updatedCarts);
    calculateTotals(updatedCarts);

  };

  useEffect(() => {
    // Create a map to track the unique products and their quantities
    const productMap = new Map();

    // Update the map with the new quantities
    carts.forEach(cartItem => {
      const existingCartItem = productMap.get(cartItem.id);
      if (existingCartItem) {
        // If the product already exists, update the quantity
        productMap.set(cartItem.id, { ...existingCartItem, quantity: existingCartItem.quantity + 1 });
      } else {
        // If the product doesn't exist, add it to the map with quantity 1
        productMap.set(cartItem.id, { ...cartItem, quantity: 1 });
      }
    });

    // Convert the map values to an array to update state
    const updatedCarts = Array.from(productMap.values());

    setUniqueCarts(updatedCarts);
    calculateTotals(updatedCarts);
  }, [carts]);

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Checkout button clicked!");
  };

  return (
    <div className="Carlist">
      <h1>Carlist Product</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uniqueCarts.map((c) => (
            <tr key={c.id}>
              <td>
                <img src={`./${c.image[0]}`} alt={c.name} />
              </td>
              <td>{c.name}</td>
              <td>{c.price} $</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={c.quantity}
                  onChange={(e) => handleQuantityChange(c.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>
                <button onClick={() => deleteCart(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total Quantity:</td>
            <td colSpan="2" className="total-quantity-value">{totalQuantity}</td>
          </tr>
          <tr>
            <td colSpan="2">Total Price:</td>
            <td colSpan="2" className="total-price-value">{totalPrice} $</td>
            <td colSpan="5" style={{ textAlign: "center" }}>
              <button className="pay" onClick={handleCheckout}>Pay</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Carlist;