import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
    });

    const {email, password, loading, error, redirectToReferrer} = values;
    const {user} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})
        signin({email, password})
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, loading: false})
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const showError = () => (

            <div class="error" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        );
    

    const showLoading = () => 
        loading && (
            <div className="alert alert-info">
                <h2>Loading....</h2>
            </div>
        );

        const redirectUser = () => {
            if(redirectToReferrer){
                if(user && user.role === 1){
                    return <Redirect to="/admin/dashboard" />;
                } else {
                    return <Redirect to="/user/dashboard" />;
                }
            }
            if(isAuthenticated()) {
                return <Redirect to="/" />;
            }
        };

    const signInForm = () => (
        <div class="l-form">
            <form action="" class="form">
                <h1 class="form__title">Sign In</h1>

                <div class="form__div">
                    <input onChange={handleChange('email')} type="text" class="form__input" placeholder=" " value={email}/>
                    <label for="" class="form__label">Email</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange('password')} type="password" class="form__input" placeholder=" " value={password}/>
                    <label for="" class="form__label">Password</label>
                </div>

                <input onClick={clickSubmit} type="submit" class="form__button" value="Sign In" />
            </form>
        </div>
    )

    return (
        <>
            {showLoading()}
                {showError()}
                {signInForm()}
                {redirectUser()}
        </>
    )
}

export default Signin;