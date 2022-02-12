import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { register } from "../auth";

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        sof: "",
        cef: "",
        de: ""
    });

    const {name, email, phone, gender, dob, sof, cef, de, error, redirectToReferrer } = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false})
        register({name, email, phone, gender, dob, sof, cef, de})
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, redirectToReferrer: false})
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    dob: '',
                    sof: '',
                    cef: '',
                    de: '',
                    error: '',
                    redirectToReferrer: true
                })
            }
        })
    };

    const showError = () => (
            <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        );
    

    const redirectUser = () => {
        if(redirectToReferrer) {
            return <Redirect to="/PaymentPage" />
        }
    }
    
    const regUpForm = () => (
        <div class="l-form">
            <form action="" class="form">
                <h2 class="form__title">PERSONAL DATA</h2>

                <div class="form__div">
                    <input onChange={handleChange("name")} type="text" class="form__input" placeholder=" " value={name} />
                    <label for="" class="form__label">Full Name</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("email")} type="text" class="form__input" placeholder=" " value={email} />
                    <label for="" class="form__label">Email</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("phone")} type="text" class="form__input" placeholder=" " value={phone} />
                    <label for="" class="form__label">Phone Number</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("gender")} type="text" class="form__input" placeholder=" " value={gender} />
                    <label for="" class="form__label">Gender</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("dob")} type="text" class="form__input" placeholder=" " value={dob} />
                    <label for="" class="form__label">Date of Birth</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("sof")} type="text" class="form__input" placeholder=" " value={sof} />
                    <label for="" class="form__label">State of Origin</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("cef")} type="text" class="form__input" placeholder=" " value={cef} />
                    <label for="" class="form__label">Course entered for</label>
                </div>

                <div class="form__div">
                    <input onChange={handleChange("de")} type="text" class="form__input" placeholder=" " value={de} />
                    <label for="" class="form__label">Driving experience</label>
                </div>

                <input onClick={clickSubmit} type="submit" class="form__button" value="Submit" />
            </form>
        </div>
    );

    return (
        <>
            {showError()}
            {regUpForm()}
            {redirectUser()}
        </>
    )
};

export default Register;