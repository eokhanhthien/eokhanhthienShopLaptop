import * as Types from "./../constants/ActionType"



var data =JSON.parse(localStorage.getItem("LOGINFACEBOOK"));  //localStorage
const InitialState = data ? data :[];                //localStorage
// const InitialState = {
//     infoUser:[],
//     isLoggedIn:false
// }


const  loginFacebook = (state = InitialState, action) => {
    switch (action.type) {
        case Types.GET_ACC_FACEBOOK:
            state.push({
                infoUser: action.info,
            });
            localStorage.setItem("LOGINFACEBOOK",JSON.stringify(state));  //localStorage
            return [...state]
     
        default:
            return state
    }
}

export default loginFacebook