import { combineReducers} from 'redux'; //Nơi lưu reducer STORE thức hiện action
import products from "./products"
import cart from './cart';
import favorite from './favorite';
import showModal from './showModal';
import loginFacebook from './loginFacebook';
const appReducers = combineReducers({
    products,
    cart,
    favorite,
    showModal,
    loginFacebook,
});

export default appReducers
