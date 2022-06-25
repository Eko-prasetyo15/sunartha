import { combineReducers } from "redux";

const initialState = {
    isLoading: false,
    datas: [],
    branch: []
 
}
const ReduxData = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: !state.isLoading };
        case 'POST_DATA_SUCCESS':
            return { ...state, datas: action.datas }
        case 'GET_BRANCH_SUCCESS':
            return { ...state, branch: action.datas }
        default:
            return state
    }
}

export default combineReducers({
    ReduxData
});