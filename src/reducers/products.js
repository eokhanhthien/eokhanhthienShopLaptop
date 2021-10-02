import * as Types from "./../constants/ActionType"

const InitialState = { 
    LaptopDetail:"",
    arrayProduct:[],
}

const products = (state = InitialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_DETAIL:
            // console.log(action.product)  //Ở bên action -> index.js khai báo biến gì thì ở đây nhận lại biến ấy
            return {...state,  LaptopDetail: action.product}
        case Types.GET_DB_LAPTOP:
            return {...state,arrayProduct:action.product}
        default:
            return state
    }
}

export default products;