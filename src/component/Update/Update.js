import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import  { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const navigate=useNavigate();

    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));

    }, [])

   const handelUpdate=((e)=>{
            e.preventDefault();
    axios.put(`https://6710e571a85f4164ef2fd79e.mockapi.io/crudreact/${id}`,
    {name:name,
        email:email,
       })
       .then(()=>{
        navigate("/read");
       })
   })

    
  return (
    <>
    <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text"
                     placeholder="enter Name"
                     value={name}
                    onChange={(e) => setName(e.target.value)} />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    value={email} 
                   onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>


                <Button
                className='mx-3'
                 variant="primary"
                 type="submit" 
                 onClick={handelUpdate}>
                    Update
                </Button>
                <Link to={"/read"}>
                <button
                className='btn btn-secondary mx-3' >
                    Back
                </button>
                </Link>
            </Form>
        </div>
    </>
  )
}

export default Update