import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import { useForm } from 'react-hook-form'
const ViewWrapper = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;


const Label = styled.label`
text-align:center;
`;

const StyledButton = styled(Button)`
/* margin-top:50px; */
margin-left:10px;
width:200px;
height:30px;
`;

const Form = styled.form`
     height:600px;
width:400px;
    display:flex;
     flex-direction: column;
   padding: 50px 90px;

`;
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.warning};
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.bold};
`;


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }


    return (
        <ViewWrapper>
            {/* <FromWrapper> */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label><h1>User Name:</h1></Label>
                <Input name="user" placeholder="user " ref={register({
                    required: true,
                })} />
                {errors.user && <ErrorMessage>This field is required</ErrorMessage>}

                <Label><h1>Password:</h1></Label>
                <Input name="password" placeholder="password " ref={register({
                    required: true,
                })} />
                {errors.password && <ErrorMessage>This field is required</ErrorMessage>}

                <Label><h1>Press to Login:</h1></Label>
                <StyledButton>Login</StyledButton>
            </Form>
            {/* </FromWrapper> */}
        </ViewWrapper>
    )
}



export default Login