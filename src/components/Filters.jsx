import { useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export const Filters = () => {
  const [rangePrice, setRangePrice] = useState(0)
  const [category, setCategory] = useState('')
  const priceId = useId()
  const categoryId = useId()
  const { filters, setFilters } = useFilters()

  const HandleChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }))
  }

  const HandleCategory = (event) => {
    const newCategory = event.target.value
    setCategory(event.target.value)
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: newCategory,
    }))
  }

  return (
    <>
      <form className="filter">
        <div>
          <label htmlFor={priceId}>Precio a partir de: </label>
          <input
            type="range"
            id={priceId}
            min="0"
            max="3000"
            value={filters.minPrice}
            onChange={HandleChange}
          />
          <span>{filters.minPrice}€</span>
        </div>
        <div>
          <label htmlFor={categoryId}>Categoría {category}</label>
          <select
            name="category"
            id={categoryId}
            value={category}
            onChange={HandleCategory}
          >
            <option value="all">Todas las categorías</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
      </form>
    </>
  )
}
