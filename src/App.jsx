import { products as initialProducts } from './mooks/productos.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
    </>
  )
}

export default App
