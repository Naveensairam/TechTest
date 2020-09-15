import { SAVE_LIST } from "../Action/myAction";
// let pinCodes = [];
function userDataReducer(state: any, action: any) {
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