import axios from 'axios';
import React, { useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';


export default function EditPerson() {
    let navigate = useNavigate();

    const {id} = useParams()

    const [person, setPerson] = useState ({
        name: "",
        lastName: "",
        age: "",
        education: "",
        email: "",
        phoneNumber: "",
        startedDate: ""
    });

    const { name, lastName, age, education, email, phoneNumber, startedDate } = person;

    const onInputChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadPerson();
    },[]);


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/person/${id}`, person);
        navigate("/")
    };


    const loadPerson = async ()=>{
        const result=await axios.get(`http://localhost:8080/person/${id}`);
        setPerson(result.data)
    }

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                <h2 className="text-center m-8">Editing a person information</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new Last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new age"
                    name="age"
                    value={age}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="education" className="form-label">
                        Education
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new education"
                    name="education"
                    value={education}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new Phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="startedDate" className="form-label">
                        Started Date
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter new Date"
                    name="startedDate"
                    value={startedDate}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <td><Link to="/afGR53QW9dwr" type="submit" id="btnSubmit" className="btn btn-primary btn-lg">
                    Update 
                </Link></td>{" "}
                <td><Link to="/afGR53QW9dwr" type="button" id="btnCancel" className="btn btn-primary btn-lg">
                    Back
                </Link></td>
            </form>
            </div>
        </div>
    </div>
    );
}