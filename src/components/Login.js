import { Grid } from '@mui/material';
import React, { useState } from 'react';
import GoogleIcon from "@mui/icons-material/Google";

import { GoogleLogin } from 'react-google-login'
import * as actionTypes from 'util/redux/types'
import { useDispatch } from 'react-redux';
import actionCreator from 'util/redux/actions/actionCreator';
import api from 'util/api';

const classes = {
    google: {
        width: 38,
        height: 38,
        color: "#4285F4",
    },
}
const CLIENT_ID = "748349014387-4l8akrja8b1g2loavcvam75eu1o3nsl9.apps.googleusercontent.com"

const Login = () => {
    const dispatch = useDispatch()
    const login = async (user) => {
        try {
            dispatch(actionCreator(actionTypes.LOADING));
            const res = await api.post('/reviewer/create', user)
            localStorage.setItem('guid', res.googleId)
            dispatch(actionCreator(actionTypes.LOGIN_SUCCESS, res));
        } catch (error) {
            alert(error.message)
        }
    }

    const onSuccess = (response) => {
        let user = response.profileObj
        login(user)

    }

    const onFailure = (response) => {
        console.log(response);
        dispatch(actionTypes.LOGOUT);
        localStorage.removeItem('guid')
    }
    return (
        <div>
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <Grid item xs={4}>
                        <GoogleIcon onClick={renderProps.onClick} style={classes.google} />
                    </Grid>
                )}
            />
        </div>
    )
}

export default Login;