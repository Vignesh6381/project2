import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import edit from '../UI/edit.png'
import del from '../UI/delete.png'
// import mail from '../UI/mail.png'
const api = "https://687494cadd06792b9c9459cd.mockapi.io/register/get-store-input";


const Products = () => {
  const [data, setData] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        setData(response.data);
        console.log("hf", response.data)

      } catch (error) {
        console.error('❌ Error fetching data:', error);
      }
    })();
  }, []);
  const handledelete = (id) => {
      (async () => {
        try {
          const res = await axios.delete(`${api}/${id}`) 
          console.log(res)
          setData((prevData) => prevData.filter(item => item.id !== id));
          alert('can i delete')
  
        } catch (error) {
          console.error(error)
        }
      })();
    }
    

  return (
    <div className="container my-4">
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>S/NO</th>
              <th>Image</th>
              <th>Name</th>
              <th>Tags</th>
              <th>PhoneNumber</th>
              {/* <th>Ingredients</th>
              <th>Preparation Time</th>
              <th>Rating</th>
              <th>Review</th> */}
              <th>ExternalLink</th>
              <th>Rate</th>
              <th>Action</th>


            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">Loading...</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id} >
                  <td>{index + 1}</td>
                  <td>
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt="recipe"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.tags || "—"}</td>
                  <td>{item.phone_number}</td>
                  {/* <td>{item.ingredients}</td>
                  <td>{item.prepation_time}</td>
                  <td>{item.rating}</td>
                  <td>{item.reviews}</td> */}
                  <td 
        onClick={() => navigate('/showentities', { state: { item } })}
                  
                  
                  >{item.external_link ? 'Yes' : 'No'}</td>
                  <td>{item.rate}</td>
                  <td>
                    <div class=" d-flex ">
                      <img src={del} alt='del' style={{ cursor: "pointer", width: "24px", marginLeft: "8px" }} onClick={() => handledelete(item.id)} />
                    </div>
                  </td>


                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Products