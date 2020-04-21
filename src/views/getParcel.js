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
margin-left:10px;
width:200px;
height:30px;
`;

const GetParcel = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    return (
        <ViewWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Label><h1>Type Parcel ID:</h1></Label>
                <Input
                    name="parcel"
                    placeholder="123123213213 "
                    ref={register({
                        required: true,
                    })} />
                {errors.parcel && <ErrorMessage>This field is required</ErrorMessage>}

                <Label><h1></h1></Label>
                <StyledButton>GET Parcel</StyledButton>
            </Form>
        </ViewWrapper>
    )
}



export default GetParcel