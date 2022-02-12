import React from "react";
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";

const AdminDashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card" id="xx">
                <h4 className="">Admin Links</h4>
                <ul className="list">
                    <li className="list-item">
                        <Link className="nav-link" to="/admin/users">View Clients</Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card">
                <h3 className="header">User Information</h3>
                <ul className="list">
                    <li className="list-item">{name}</li>
                    <li className="list-item">{email}</li>
                    <li className="list-item">{role === 1 ? "Admin" : "Registered User"}</li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <div className="row">
                <div className="row2">
                    {adminInfo()}
                </div>
                <div className="row1">{adminLinks()}</div>
            </div>
        </>
    )
}

export default AdminDashboard;