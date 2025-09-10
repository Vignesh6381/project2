import React from 'react'
import { useLocation } from 'react-router-dom'
import './Serving.css'

const Serving = () => {
    const location = useLocation('')
    const data = location.state
    console.log(data)
    return (
        <div className="container py-4">
  <div className="row align-items-start">
    {/* Image Section */}
    <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
      <img
        className="img-fluid rounded shadow"
        src={data.item.image}
        alt="kbh"
      />
    </div>

    {/* Details Section */}
    <div class="col-12 col-md-7 text-start">
      <h2 class="fw-bold mb-3">{data.item.name}</h2>

      <p class="mb-2">
        ⭐ {data.item.rating} ({data.item.reviewCount} reviews)
      </p>

      <p class="mb-2">
        <strong class="text-capitalize text-muted">Tags:</strong>{' '}
        {data.item.tags.join(', ')}
      </p>

      <p class="mb-2">
        <strong class="text-capitalize text-muted">Cuisine:</strong>{' '}
        {data.item.cuisine}
      </p>

      <p class="mb-2">
        <strong class="text-capitalize text-muted">Ingredients:</strong>{' '}
        {data.item.ingredients.join(', ')}
      </p>

      <p class="mb-0">
        <strong class="text-capitalize text-muted">Instructions:</strong>{' '}
        {data.item.instructions.join(', ')}
      </p>
    </div>
  </div>
</div>

    )
}

export default Serving