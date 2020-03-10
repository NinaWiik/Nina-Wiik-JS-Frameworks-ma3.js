import React from "react";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
    userName: yup.string()
    .required("Username is required"),
    password: yup.string()
    .required('No password provided.') 
    .min(4, 'Password is too short - it must be 4 characters minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export function Login() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    } 
    
    return (
        <div>
            <Heading title="Login" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="userName" placeholder="Enter your username" ref={register} />
                    {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Enter your password" ref={register} />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Form.Group>

                <Button type="submit">Log In</Button>
            </Form>
        </div>
    );
}

export default Login;