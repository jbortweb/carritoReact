import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>Mascara de ojos</strong> - {price}€
      </div>
      <footer>
        <p>Cantidad: {quantity}</p>
        <button onClick={addToCart} className="simbol">
          +
        </button>
      </footer>
    </li>
  )
}
export function Cart() {
  const cartChecknoxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartChecknoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartChecknoxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
          <p className="carrito">
            {cart.length > 0 ? 'Vaciar carrito' : 'Carrito vacío'}
          </p>
        </button>
      </aside>
    </>
  )
}
