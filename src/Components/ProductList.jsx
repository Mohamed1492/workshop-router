import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({items}) => {
  return (
    <div>
        {
            React.Children.toArray(items.map(el=><ProductCard product={el}/>))
        }
    </div>
  )
}

export default ProductList