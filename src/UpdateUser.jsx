import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:3000/getUser/${id}`)
      .then((result) => {
        if (result.data) {
          setName(result.data.name);
          setEmail(result.data.email);
          setAge(result.data.age);
        }
      })
      .catch((err) => console.error('Error fetching user:', err));
  }, [id]); // Include id as a dependency

  // Update user
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/updateUser/${id}`, { name, email, age });
      console.log('User updated:', res.data);
      navigate('/');
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div className="container">
      <h1>Update User</h1>
      <form onSubmit={updateUser}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
