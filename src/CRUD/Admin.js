import React, {useState, useEffect} from "react";
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Admin() {

    const [persons, setPersons]=useState([])

    useEffect(()=>{
        loadPersons();
    },[]);

    const loadPersons=async()=>{
        const result=await axios.get("http://localhost:8080/persons")
        setPersons(result.data);
    };

    const deletePerson=async (id)=>{
        await axios.delete(`http://localhost:8080/person/${id}`)
        loadPersons()
    }

return(
    <div className="container">
        <div className="py-2">
            <div className="stripe">
       <Link className="btn btn-primary mx-2" to="/AddPerson">Add new Person</Link>  <th></th>
            <table className="table border shadow">
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
                        <th>Action</th>
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

                        <Link className="btn btn-primary btn-lg" 
                        to={`/editperson/${person.id}`}>Edit</Link>

                        <Button type="button" id="btnCancel" onClick={()=>deletePerson(person.id)}
                        className="btn btn-primary btn-lg">Delete
                        </Button>  
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
)}
