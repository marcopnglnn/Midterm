import * as actionTypes from "../types";

const inititalState = {
    isDarkMode: false,
    lang: "en",
}

function uiReducer(state = inititalState, action) {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                isDarkMode: action.payload,
            };
        case actionTypes.SET_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state
    }
}

export default uiReducer;