import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import edit from '../UI/edit.png'
import del from '../UI/delete.png'
import mail from '../UI/mail.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const API = "https://687494cadd06792b9c9459cd.mockapi.io/register/register-form";

const Feature = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [editdata, setEditdata] = useState({ name: '', email: '', phone: '', message: '' });
  const [editId, setEditId] = useState(null);



  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('❌ Error fetching data:', error);
      }
    })();
  }, []);

  const handledelete = (id) => {
    (async () => {
      try {
        const res = await axios.delete(`${API}/${id}`)
        console.log(res)
        setData((prevData) => prevData.filter(item => item.id !== id));
        alert('can i delete')

      } catch (error) {
        console.error(error)
      }
    })();
  }
  const openEditmodel = (item) => {
    setEditdata({
      name: item.name,
      email: item.email,
      phone: item.phone,
      message: item.message,
    })
    setEditId(item.id)
    setModel(true)

  }

  // const handlechange = (e) => {
  //   setEditdata({ ...editdata, [e.target.name]: e.target.value })
  //   console.log(editdata);


  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`${API}/${editId}`, editdata);
  //     alert("User updated successfully!");
  //     setData(prevData => prevData.map(user => user.id === editId ? {...user,...editdata}:user))
  //     setModel(false);
  //   } catch (error) {
  //     console.error('Update failed:', error);
  //   }
  // };
  const sendemail = (item) => {
    const to = "vigneshbala6381@gmail.com"; // Replace with your email
    const subject = `Service Request from ${item.name}`;
    const body = `
Name: ${item.name}
Email: ${item.email}
Message: ${item.message}
Phone: ${item.phone}
`;

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;


  };


  return (
    <div class="container py-4">
      <h2>Form Submissions</h2>

      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-light">
            <tr>
              <th>SI.NO</th>
              <th>Special ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" class="text-center">Loading...</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>

                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>
                    <div class=" d-flex ">
                      <img src={edit} alt='edit' style={{ cursor: "pointer", width: "24px", marginLeft: "8px" }} onClick={() => openEditmodel(item)} />
                      <img src={del} alt='del' style={{ cursor: "pointer", width: "24px", marginLeft: "8px" }} onClick={() => handledelete(item.id)} />
                      <img src={mail} alt='mail' style={{ cursor: "pointer", width: "24px", marginLeft: "8px" }} onClick={() => sendemail(item)} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
      {model && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Form</h3>

            <Formik
              initialValues={editdata}
              enableReinitialize
              validationSchema={Yup.object({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                phone: Yup.string().matches(/^[0-9]{10}$/, 'Enter valid 10-digit phone').required('Phone is required'),
                message: Yup.string().required('Message is required'),
              })}
              onSubmit={async (values) => {
                try {
                  // Update data in API
                  await axios.put(`${API}/${editId}`, values);

                  // Update local state (avoid re-fetching)
                  setData((prev) =>
                    prev.map((item) =>
                      item.id === editId ? { ...item, ...values } : item
                    )
                  );

                  alert("User updated successfully!");
                  setModel(false);
                } catch (error) {
                  console.error("Update failed:", error);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label>Name:</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Email:</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone:</label>
                    <Field type="text" name="phone" className="form-control" />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Message:</label>
                    <Field type="text" name="message" className="form-control" />
                    <ErrorMessage name="message" component="div" className="text-danger" />
                  </div>

                  <div className="modal-buttons d-flex gap-2 justify-content-end">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      Save
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setModel(false)}>
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}


    </div>

  );
};

export default Feature;
