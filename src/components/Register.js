import { React, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { validate } from '../assets/js/validate';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Register() {

    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const history = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleDate = (value) => {
        setFormValues({ ...formValues, dob: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        document.title = "Registration";
    }, []);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch("http://localhost:4000/account/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formValues)
            })
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    if (result.status === false) {
                        if (Object.keys(result.errMessage).length !== 0) {
                            const errors = {};
                            result.errorMessage.forEach(element => {
                                errors[element.param] = element.msg;
                            });
                            setFormErrors(errors);
                        } else {
                            console.log(result.errorMessage)
                        }
                    } else {
                        console.log(result.message);
                        history('/login', { state: { message: result.message } })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [formErrors, isSubmit])


    return (
        <div>
            <div className="container">
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10">
                                <div className="wrap d-md-flex">
                                    <div className="img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)", backgroundSize: "cover" }}>
                                    </div>
                                    <div className="login-wrap p-4 p-md-5">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-4">Sign up</h3>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="signin-form" noValidate>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="username">Username</label>
                                                <input type="text" className="form-control" name="username" onChange={handleChange} placeholder="Username" required />
                                                <span className="text-danger">{formErrors.username}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="firstname">First Name</label>
                                                <input type="text" className="form-control" name="firstname" onChange={handleChange} placeholder="Username" required />
                                                <span className="text-danger">{formErrors.firstname}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="lastname">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" onChange={handleChange} placeholder="Username" required />
                                                <span className="text-danger">{formErrors.lastname}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="email">Email</label>
                                                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Email" required />
                                                <span className="text-danger">{formErrors.email}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="dob">Date of Birth</label>
                                                {/* <input type="date" pattern="\d{2}-\d{2}-\d{4}" className="form-control" name="dob" onChange={handleChange} placeholder="26/12/2001" required /> */}
                                                <div>
                                                    <DatePicker
                                                        selected={formValues.dob}
                                                        onChange={(date) => handleDate(date)}
                                                        placeholderText={'dd/mm/yyyy'}
                                                        className="form-control"
                                                        dateFormat="dd/MM/y"
                                                    />
                                                    <span className="text-danger">{formErrors.dob}</span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="contact">Contact</label>
                                                <input type="tel" className="form-control" name="contact" onChange={handleChange} placeholder="contact" required />
                                                <span className="text-danger">{formErrors.contact}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name="address" onChange={handleChange} placeholder="Address" required />
                                                <span className="text-danger">{formErrors.address}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password" required />
                                                <span className="text-danger">{formErrors.password}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                                                <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" required />
                                                <span className="text-danger">{formErrors.confirmPassword}</span>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Register</button>
                                            </div>
                                        </form>
                                        <p className="text-center">Not a member? <NavLink to="/login">Log In</NavLink></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
