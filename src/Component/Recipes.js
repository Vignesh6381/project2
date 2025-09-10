import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { API } from './API';
import './Recipes.css'
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API);
        console.log(response.data.recipes)
        setData(response.data.recipes);
      } catch (error) {
        console.error('❌ Error fetching data:', error);
      }
    })();
  }, []);

  return (
   <div class="container py-5  min-vh-100">
  <h1 class="text-center fw-bold mb-5 d-flex align-items-center justify-content-center gap-2">
    <span role="img" aria-label="plate">🍽️</span> Our Recipes
  </h1>

  <div class="row g-4 px-3">
    {data.map((item, index) => (
      <div
        key={index}
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        onClick={() => navigate('/serving', { state: { item } })}
      >
        <div class="card h-100 shadow-sm">
          <img
            src={item.image}
            alt={item.name}
            class="card-img-top"
            // style={{ height: '200px', objectFit: 'cover' }}
          />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text text-muted small">
              ⭐ {item.rating} ({item.reviewCount} reviews)
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Recipes;


