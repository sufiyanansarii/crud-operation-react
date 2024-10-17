import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const Read = () => {
  const [data,setData]=useState([])
    function getdata() {
        axios.get("https://6710e571a85f4164ef2fd79e.mockapi.io/crudreact")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);

        });
    }

   function deleteData(id){
    axios.delete(`https://6710e571a85f4164ef2fd79e.mockapi.io/crudreact/${id}`)
    .then(()=>{
      getdata();
     })
   }

  const setToLocalstorage=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);


  }
    useEffect(() => {
      
      getdata();
    }, [])
    
  return (
    <div className='read'>
       <div className='d-flex justify-content-between m-3'>
                <h2>Read</h2>
                <Link to={"/"}>
                <button className='btn btn-primary'>Add New</button>
                </Link>
            </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {
        data.map((eachData)=>{
          return(
            <>
            <tbody>
        <tr>
          <td>{eachData.id}</td>
          <td>{eachData.name}</td>
          <td>{eachData.email}</td>
          <Link to={"/update"}>
          <td>
            <Button className='btn-success m-2 ' 
          onClick={()=>{setToLocalstorage(
            eachData.id,
            eachData.name,
            eachData.email
          )}
          }>
          Edit</Button>
          </td>
          </Link>
          <td><Button className='btn-danger p-2' 
          onClick={()=>deleteData(eachData.id)}
          >Delete</Button></td>
        </tr>
      </tbody>
            </>
          )
        })
        }
    </Table>
    </div>
  )
}

export default Read