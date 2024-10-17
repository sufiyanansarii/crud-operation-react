import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
   
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history=useNavigate();
    const header ={"Access-Control-Allow-Origin":"*"};
    const handelsubmit=(e)=>{
        e.preventDefault();
        console.log("clicked");
        axios.post(
            'https://6710e571a85f4164ef2fd79e.mockapi.io/crudreact',
            {name:name,
             email:email,
            header
            }
        )
            .then(()=>{

                history("/read");
            });
    }
    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h2> CREATE</h2>
                <Link to={"/read"}>
                <button className='btn btn-primary'>SHOW DATA</button>
                </Link>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter Name"
                    onChange={(e) => setName(e.target.value)} />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                   onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit" onClick={handelsubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Create