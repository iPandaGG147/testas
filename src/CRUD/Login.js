import React from "react";
import {Link} from 'react-router-dom';


export default function AddUser() {
    

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                <h2 className="text-center m-8">Login as Admin</h2>
                <div className="mb-3">
                    
                    <label htmlFor="Username" className="form-label">
                        Username
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your User name"
                    name="Username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                        Password
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Password"
                    name="Password"
                    />
                    
                </div>
                <button  type="button" id="btnSubmit" className="btn btn-primary btn-lg ">
                    Login 
                </button>{" "}

            <Link to="/afGR53QW9dwr">
                <button type="button" id="btnCancel" className="btn btn-primary btn-lg">
                    Back
                </button>
            </Link>
            
                     
            </div>
        </div>
    </div>
    
    
}