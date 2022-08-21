import { React, useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function Login() {
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const [msg, setMsg] = useState("");
    var msg = "";

    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        if (location.state !== null) {
            msg = location.state.message;
            window.history.replaceState({}, document.title)
        }
    }, [location])


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch("URL", {
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
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [formErrors, isSubmit])


    useEffect(() => {
        document.title = "Login"
    }, []);
    return (
        <div>
            <div className="container">
                <div>{msg}</div>
                <section className="ftco-section">
                    <div className="container">
                        {/* <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Login</h2>
                            </div>
                        </div> */}
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10">
                                <div className="wrap d-md-flex">

                                    <div className="login-wrap p-4 p-md-5">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-4">Sign In</h3>
                                            </div>
                                            <div className="w-100">
                                                <p className="social-media d-flex justify-content-end">
                                                    <button className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></button>
                                                    <button className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></button>
                                                </p>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="signin-form" noValidate>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="name">email</label>
                                                <input type="text" className="form-control" placeholder="email" name="email" onChange={handleChange} required />
                                                <span className="text-danger">{formErrors.email}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="password">Password</label>
                                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} required />
                                                <span className="text-danger">{formErrors.password}</span>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                            </div>
                                            <div className="form-group d-md-flex">
                                                {/*                                                 
                                                <div className="w-100 text-md-right">
                                                    <a>Forgot Password</a>
                                                </div> */}
                                            </div>
                                        </form>
                                        <p className="text-center">Not a member? <NavLink to="/register">
                                            Sign Up
                                        </NavLink></p>
                                    </div>
                                    <div className="img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)" }}>
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
