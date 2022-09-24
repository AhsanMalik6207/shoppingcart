import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import './login.css'
import Input from "react-validation/build/input";
// import { login } from "../store/cart/Authaction";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    // let navigate = useNavigate();

    const form = useRef();
    // const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        // if (checkBtn.current.context._errors.length === 0) {
        //     dispatch(login(username, password))
        //         .then(() => {
        //             navigate("/");
        //             window.location.reload();
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // } else {
        //     setLoading(false);
        // }
    };

    // if (isLoggedIn) {
    //     return <Navigate to="/" />;
    // }

    return (
        <div className="login-div">
                <div className="logo-div">
               <h4>User Login</h4>
                </div>
                <Form onSubmit={handleLogin} ref={form}>
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />

                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />

                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                </Form>
            </div>
    );
};

export default Login;
