import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import StudentEvaluation from "../pages/StudentEvaluation";
import StudentList from "../pages/StudentList";
import api from 'util/api'
import actionCreator from "util/redux/actions/actionCreator";
import * as actionTypes from "util/redux/types";
import { useDispatch, useSelector } from "react-redux";
import Loader from "components/Loader";
import Navbar from "components/Navbar";

export default function Index() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.app)
  const authenticate = async () => {
    const guid = localStorage.getItem("guid");
    if (guid) {
      dispatch(actionCreator(actionTypes.LOADING));
      let res = await api.get(`/reviewer/${guid}`);
      if (res.googleId) {
        localStorage.setItem('guid', res.googleId)
        return dispatch(actionCreator(actionTypes.LOGIN_SUCCESS, res));
      }
    }
    return dispatch(actionCreator(actionTypes.LOGOUT));

  }
  useEffect(() => {
    authenticate()
    return () => {

    }
  }, [])
  return (<>
    {
      state.authChecked ?
        <>      <Navbar user={state.user} />

          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/studeval" element={<StudentEvaluation />} />
          </Routes>
        </> : <Loader />
    }
  </>

  );
}
