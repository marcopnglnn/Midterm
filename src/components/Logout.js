import { LogoutOutlined } from '@mui/icons-material';
import { Button, ListItemIcon, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux';
import actionCreator from 'util/redux/actions/actionCreator';
import * as actionTypes from 'util/redux/types'
const CLIENT_ID = "748349014387-4l8akrja8b1g2loavcvam75eu1o3nsl9.apps.googleusercontent.com"
const Logout = () => {
    const [isLoggedOut, setIsLoggedOut] = useState(false)

    const dispatch = useDispatch()
    const onLogoutSuccess = (res) => {
        setIsLoggedOut(true)
        dispatch(actionCreator(actionTypes.LOGOUT))

    }
    const onLogoutFailure = () => {
        console.log('logout failed');
        setIsLoggedOut(false)
    }

    return (
        <div>
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"

                onLogoutSuccess={onLogoutSuccess}
                onLogoutFailure={onLogoutFailure}
                render={renderProps => (
                    <MenuItem disabled={isLoggedOut} onClick={renderProps.onClick}>
                        <ListItemIcon >
                            <LogoutOutlined fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                )}
            />
        </div>
    )
}

export default Logout