import {React, Fragment, useState, useEffect} from "react";
import {Form, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from '@mui/material';
import axios from 'axios';

export default function Worker() {

    const [persons, setPersons]=useState([])

    useEffect(()=>{
        loadPerson();
    },[]);

    const loadPerson=async()=>{
        const result=await axios.get("http://localhost:8080/persons")
        setPersons(result.data);
    };  

return(

    <Container>
    <Fragment>
        <div style={{margin:"3rem"}}><Form className="d-grid gap-5" style={{margin:"1rem"}}>
    </Form>
    <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Education</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Started Date</th>
                        </tr>
                    </thead>
            <tbody>
            
                {persons.map((person, index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{person.name}</td>
                        <td>{person.lastName}</td>
                        <td>{person.age}</td>
                        <td>{person.education}</td>
                        <td>{person.email}</td>
                        <td>{person.phoneNumber}</td>
                        <td>{person.startedDate}</td>
                        </tr> 
                ))}   
            </tbody>
            </Table>
            </div>  
    </Fragment>
    </Container>
    );
}
