import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./user/Register";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Account from "./core/Account";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import Users from "./Admin/Users";

const ConRoutes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/PaymentPage" exact component={Account}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/admin/users" exact component={Users} />
            </Switch>
        </BrowserRouter>
    );
};

export default ConRoutes;