import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {TextField,Button, Typography} from "@material-ui/core";
import "./login.css";
import { Link } from "react-router-dom";


export const Login = (props) =>{

    const Container = styled.div`
        background-color:#025959;
        min-height:100vh;
    `;


    const initalValues ={
        user:"",
        senha:"",
    }

    const [formValues,setFormValues] = useState(initalValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmiting,setIsSubmiting] = useState(false);
    const [entrar,setEntrar] = useState(false);

    const submit = () =>{
        setEntrar(true);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validation(formValues));
        setIsSubmiting(true);
    }

    const validation = (values) =>{
        let errors = {}

        if(!values.user){
            errors.user = "Campo Obrigatorio"
        }
        if(!values.user){
            errors.senha = "Campo Obrigatorio"
        }

        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(()=>{
        if(Object.keys(formErrors) && isSubmiting){
            submit();
            setIsSubmiting(false);
        }
    },[formErrors,isSubmiting,submit])

    return(
        <div className="container__login" style={{
            height: "100vh",
            backgroundColor:"#4B1A73"
        }}>
            <div style={{
                justifyContent:"center",
                display: "grid",
                position: "relative",
                top:"20vh",
                backgroundColor:"#D5D9DA",
                padding: "250px 5px 50px 5px",
                width: "50vh",
                left: "70vh",
                borderRadius:"60px",
                border:"4px solid #471C75",
                

            }}>
                <Typography variant="h3" style={{position:"relative",bottom:"10vh",color:"#431D74"}} >Login Carteira</Typography>
                <TextField
                    value={formValues.user}
                    name="user"
                    id="user"
                    label="Usuario"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    error={formErrors.user}
                    helperText={formErrors.user}
                    onChange={handleChange} 
                   style={{
                       width: 310,
                   }}
                />
                
                <TextField
                    value={formValues.senha}
                    name="senha"
                    id="senha"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={formErrors.senha}
                    helperText={formErrors.senha}
                    onChange={handleChange} 
                
                />
                <a 
                    href="/forgetPass" 
                    style={{
                        display: "block",
                        paddingBottom:"40px",
                    }}
                >Esqueci minha senha</a>

                <Button
                    component={Link}
                    to={"/home"}
                    variant="contained"
                    disableRipple
                    style={{
                        display: "block",
                        color: "#fff",
                        backgroundColor:"#431D74",
                        fontWeight:600
                    }}
                    onClick={handleSubmit}
                > Confirmar</Button>
            </div>

            </div>

    )
}