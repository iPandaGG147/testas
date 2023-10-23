import React, {Fragment, useState} from "react";
import{Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom';



function AddPerson(){

    let history = useNavigate();
    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[age, setAge] = useState("");
    const[education, setEducation] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[startedDate, setStartedDate] = useState("");


    const handleClick=(e)=>{
        e.preventDefault()
        const savePerson={name, lastName, age, education, email, phoneNumber, startedDate}
        console.log(savePerson)
        fetch("http://localhost:8080/person",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(savePerson)

        }).then(()=>{
            console.log("Pridetas naujas darbuotojas");
            history('/afGR53QW9dwr');
        })
    
    }
    return(
        <Fragment>
 
 <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow "><Form className="d-grid gap-3" >
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required
                                  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control type="text" placeholder="Enter LastName" value={lastName} required
                                  onChange={(e) => setLastName(e.target.value)}>
                    </Form.Control>
                </Form.Group>   

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required
                                  onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEducation">
                    <Form.Control type="text" placeholder="Enter Education" value={education} required
                                  onChange={(e) => setEducation(e.target.value)}>
                    </Form.Control>
                </Form.Group>   

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" value={email} required
                                  onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>   

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                    <Form.Control type="text" placeholder="Enter Phone Number" value={phoneNumber} required
                                  onChange={(e) => setPhoneNumber(e.target.value)}>
                    </Form.Control>
                </Form.Group>   

                <Form.Group className="mb-3" controlId="formStartedDate">
                    <Form.Control type="text" placeholder="Enter Started Date" value={startedDate} required
                                  onChange={(e) => setStartedDate(e.target.value)}>
                    </Form.Control> 
            </Form.Group>

            <Button onClick={(e) => handleClick(e)}
                    type="submit">Add
                </Button>
                <Link to="/afGR53QW9dwr" type="button" id="btnCancel" className="btn btn-primary btn-md">
                    Back
                </Link>
                <th></th>
        </Form>
        </div>   
    </div>
</div>
        </Fragment>
    )
}
export default AddPerson;


