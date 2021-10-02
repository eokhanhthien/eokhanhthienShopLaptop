import { combineReducers} from 'redux'; //Nơi lưu reducer STORE thức hiện action
import products from "./products"
import cart from './cart';
const appReducers = combineReducers({
    products,
    cart,
});

export default appReducers
