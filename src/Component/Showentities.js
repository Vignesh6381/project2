import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const api = "https://687494cadd06792b9c9459cd.mockapi.io/register/get-store-input";

const Showentities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [model, setModel] = useState(false);

  const [phone, setPhone] = useState(data.item.phone_number || '');
  const [name] = useState(data.item.name || '');
  const [tags] = useState(data.item.tags || '');
  const [rating] = useState(data.item.rating || '');
  const [external,setExternal] = useState(data.item.external_link || false);
  const [ingredients] = useState(data.item.ingredients || '');
  const [reviews] = useState(data.item.reviews || '');
  const [prepation] = useState(data.item.prepation_time || '');
  const [photo] = useState(data.item.photo || '');
  console.log(data.item.external_link)

  useEffect(() => {
    if (!(data.item.phone_number).trim()) {
      setModel(true);
    }

  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${api}/${data.item.id}`, {
        name: name,
        phone_number: phone,
        tags: tags,
        rating: rating,
        external_link: true,
        ingredients: ingredients,
        reviews: reviews,
        prepation_time: prepation,
        photo: photo
      });
      setExternal(true)
      if (phone.length !== 10) {
        alert("Phone number must be exactly 10 digits.");
        return;
      }


      console.log(res.data);
      alert('Phone number updated!');
      setModel(false);
      navigate('/products');
    } catch (error) {
      console.error(error);
      alert('Failed to update data.');
    }
  };

  return (
    <div>
      <div className='d-flex gap-5'>
        <div>
          <img src={photo} alt='photo1' style={{ width: '200px' }} />
        </div>
        <div className='d-flex row text-start'>
          <p><b>NAME:</b> {name}</p>
          <p><b>PhoneNumber:</b> {data.item.phone_number}</p>
          <p><b>Ingredients:</b> {ingredients}</p>
          <p><b>PreparationTime:</b> {prepation}</p>
          <p><b>Tags:</b> {tags}</p>
          <p><b>Rating:</b> {rating}</p>
          <p><b>Reviews:</b> {reviews}</p>
          <p><b>Links:</b> {external ? 'Yes' : 'No'}</p>
        </div>
      </div>

      {model && (
        <form onSubmit={handleSubmit} className='mt-4'>

          <div className="form-group mb-3">
            <label>Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits and limit to 10 characters
                if (/^\d{0,10}$/.test(value)) {
                  setPhone(value);
                }
              }}
              placeholder="Enter 10-digit phone number"
              maxLength={10}
              required
            />
          </div>

          <div className="form-group mb-3">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Showentities;
