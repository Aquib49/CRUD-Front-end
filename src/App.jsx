import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User/>,
    },
    {
      path: "/create",
      element: <CreateUser/>,
    
    },
    {
      path: "/update/:id",
      element: <UpdateUser/>,
  
    
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
