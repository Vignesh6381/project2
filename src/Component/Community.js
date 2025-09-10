import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const api = "https://687494cadd06792b9c9459cd.mockapi.io/register/get-store-input";

const Community = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [tags, setTags] = useState('');
  const [rating, setRating] = useState('');
  const [external, setExternal] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [review, setReview] = useState('');
  const [preptime, setPreptime] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const formData = new FormData();
      // formData.append('name', name);
      // formData.append('phone_number', number);
      // formData.append('tags', tags);
      // formData.append('rating', rating);
      // formData.append('external_link', external);
      // formData.append('ingredients', ingredients);
      // formData.append('reviews', review);
      // formData.append('photo', image);

      const res = await axios.post(api, {
        name: name,
        phone_number: number,
        tags: tags,
        rating: rating,
        external_link: external,
        ingredients: ingredients,
        reviews: review,
        prepation_time: preptime,
        rate:rate,
        id: " "


      });
      alert('The form is submitted successfully!');
      console.log(res);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Form submission failed.');
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3 text-start">
          <label>Recipe Name*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="col-md-6 mb-3 text-start">
          <label>Phone Number*</label>
          <PhoneInput
            country={'in'}
            value={number}
            onChange={(phone) => setNumber(phone)}
            inputClass="form-control"
            inputStyle={{ width: '100%' }}
          />
        </div>

        {/* Tags */}
        <div className="mb-3 text-start">
          <label>Tags*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tag name"
            value={tags}
            onChange={(e) => setTags(e.target.value)}

          />
        </div>

        {/* Rating */}
        <div className="mb-3 text-start">
          <label>Rating*</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}

          />
        </div>

        {/* External Link Checkbox */}
        <div className="mb-3 text-start">
          <label>
            <input
              type="checkbox"
              checked={external}
              onChange={(e) => setExternal(e.target.checked)}
            />{' '}
            External Link
          </label>
        </div>

        {/* Review */}
        <div className="mb-3 text-start">
          <label>Review*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}

          />
        </div>

        {/* Ingredients */}
        <div className="mb-3 text-start">
          <label>Ingredients*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}

          />
        </div>
        <div className="mb-3 text-start">
          <label>Rate*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}

          />
        </div>

        {/* Upload Image */}
        <div className="mb-3 text-start">
          <label>Prep time*</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setPreptime(e.target.value)}

            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Community;
