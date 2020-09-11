import { SAVE_LIST } from "../Action/myAction";
// let pinCodes = [];
function userDataReducer(state, action) {
    switch (action.type) {
        case SAVE_LIST:
             return {
                ...action.state,
            }
        default:
            return state;
    }
}

export default userDataReducer;