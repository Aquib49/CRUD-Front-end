import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function User() {
const [users, setUsers] = useState([{name: "", age:null, email : ""}])

useEffect( ()=>
{
  axios.get('http://localhost:3000/')
  .then(res=> setUsers(res.data))
  .catch(err=> console.log(err)
  )

}
    ,[])


    const handleDelete  = async (id) =>{
   const res =   await axios.delete('http://localhost:3000/delete/'+id)
        console.log(res.data)
        window.location.reload()

    }

  return (
    <>
    <div className="container">
        <Link to="/create" className=' btn btn-success'>Add+</Link>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action </th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>
                        <Link to={`/update/${user._id}`} className='btn btn-success'>Edit </Link>
                            &nbsp;  &nbsp;
                            <button className="btn btn-danger" onClick={(e)=> handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>

    </div>


    </>
  )
}

export default User