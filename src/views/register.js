import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import ErrorMessage from '../components/atoms/ErrorMessage/ErrorMessage';
import Form from '../components/atoms/Form/Form';
import Label from '../components/atoms/Label/Label';
import { useForm } from 'react-hook-form'

const ViewWrapper = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;



const StyledButton = styled(Button)`
margin-top:50px;
margin-left:10px;
width:200px;
height:30px;
`;



const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return (
        <ViewWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Label><h1>User Name:</h1></Label>
                <Input
                    name="user"
                    placeholder="user "
                    ref={register({
                        required: true,
                    })} />
                {errors.user && <ErrorMessage>This field is required</ErrorMessage>}

                <Label><h1>Password:</h1></Label>
                <Input
                    name="password"
                    placeholder="password "
                    ref={register({
                        required: true,
                    })} />
                {errors.password && <ErrorMessage>This field is required</ErrorMessage>}

                <StyledButton>Register</StyledButton>
            </Form>
        </ViewWrapper>
    )
}



export default Register