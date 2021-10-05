import * as Types from "./../constants/ActionType"


var data =JSON.parse(localStorage.getItem("FAVORITE"));  //localStorage
const InitialState = data ? data :[];                //localStorage

const  favorite = (state = InitialState, action) => {
    var index=-1;
    switch (action.type) {
        case Types.GET_FAVORITE_PRODUCT:
            index= findProductInCart(state , action.product);
            if(index !== -1){
                state[index].quantity += action.quantity;
            }
            else{
                state.push({
                product : action.product,
                quantity: action.quantity
            });
            }
            localStorage.setItem("FAVORITE",JSON.stringify(state));  //localStorage
            return [...state]
        case Types.DELETE_FAVORITE_PRODUCT:
                index=findProductInCart(state , action.product);
                if(index!==-1){
                    state.splice(index,1);  //Hàm cắt 1 phần tử
                }
                localStorage.setItem("FAVORITE",JSON.stringify(state));  //localStorage
                return [...state]
        default:
            return state
    }
}

var findProductInCart  = (cart, product) => {
    var index=-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id === product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}
export default favorite;