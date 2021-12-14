import * as actionTypes from "../types";

const inititalState = {
    isLoggedIn: false,
    user: null,
    authChecked: false,
    students: [],
    student: []
}

function appReducer(state = inititalState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                authChecked: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                authChecked: true,
            };
        case actionTypes.LOADING:
            return {
                ...state,
                authChecked: false,
            };
        case actionTypes.FETCH_STUDENTS:
            return {
                ...state,
                students: action.payload,
                authChecked: true,

            };
        case actionTypes.SELECT_STUDENT:
            return {
                ...state,
                student: action.payload,
                authChecked: true,

            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                authChecked: true,
            };
        default:
            return state
    }
}

export default appReducer;
