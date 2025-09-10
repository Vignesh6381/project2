import React, { useState, useRef } from 'react';
import axios from 'axios';
import pic from '../UI/Illustration.png';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

const API = "https://687494cadd06792b9c9459cd.mockapi.io/register/register-form";

const Registerform = () => {
  const navigate = useNavigate();
  const toastRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛑 Validate before API call
    if (number.trim() === '') {
      setError('Phone number is required.');
      return;
    }

    setError('');

    try {
      const res = await axios.post(API, {
        name:name,
        phone: number,
        email:email,
        message: msg
      });

      console.log("Submitted Data:", res.data);

      // ✅ Show toast
      const toast = new bootstrap.Toast(toastRef.current);
      toast.show();

      // Optionally clear form
      setName('');
      setNumber('');
      setEmail('');
      setMsg('');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;
    if (input.trim() !== '' || input === '') {
      setNumber(input);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Register Form</h2>

      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={pic} alt="form" className="img-fluid rounded" />
        </div>

        {/* Form Column */}
        <div className="col-md-6 text-start align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="Name"
                required
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone no"
                value={number}
                onChange={handleNumberChange}
              />
              {error && (
                <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
            >
              Submit
            </button>
          </form>

          {/* Toast Notification */}
          <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3" style={{ zIndex: 9999 }}>
            <div
              ref={toastRef}
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                <strong className="me-auto">Message</strong>
                <small>Just now</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div className="toast-body">
                <p>Your message has been saved successfully!</p>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => navigate('/home')}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
