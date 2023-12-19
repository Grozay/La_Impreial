import React, { useState, useEffect } from "react";
import '../css/Cart/Cart.css';
import { useNavigate, } from "react-router-dom";

function Carlist({ carts, deleteCart, updateCarts, addCart, deleteCartItem }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [uniqueCarts, setUniqueCarts] = useState([]);
  const navigate = useNavigate('');
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
    // Gọi hàm xóa tất cả sản phẩm và truyền mảng rỗng
    deleteAllCarts([]);

    // Reset state
    setUniqueCarts([]);
    setTotalPrice(0);
    setTotalQuantity(0);

    // Chuyển hướng sang trang Register bằng navigate
    navigate("/pay");
  };

  const deleteAllCarts = (cartIds) => {
    // Gọi hàm xóa tất cả sản phẩm
    cartIds.forEach((cartId) => {
      deleteCart(cartId);
    });

    // Truyền mảng rỗng ra ngoài để cập nhật giỏ hàng ở component cha
    updateCarts([]);
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

                {c.quantity}

              </td>
              <td>
                <div>
                  <button className="addToCartButton" onClick={() => addCart(c, 1)}>+</button>
                  <button className="-button" onClick={() => deleteCart(c.id)}>-</button>
                </div>
                <span className="fa-stack" onClick={() => deleteCartItem(c.id)}>
                  <i className="fas fa-trash-alt fa-stack-1x"></i>
                </span>
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